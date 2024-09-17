//step8
//У файлі src/scripts/removeLastContact.js опишіть функцію removeLastContact, яка видалятиме останній контакт з масиву, якщо в масиві є хоча б один елемент.
//Перевірити роботу функції можна виконавши команду npm run remove-last, яка буде виконувати код у файлі src/scripts/removeLastContact.js. У файлі src/db/db.json мають відбутися відповідні зміни.
import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    if (Array.isArray(contacts) && contacts.length > 0) {
      contacts.pop();
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
      console.log('Последний контакт успешно удален.');
    }
  } catch (error) {
    console.error('Ошибка при удалении последнего контакта:', error);
  }
};

removeLastContact();
