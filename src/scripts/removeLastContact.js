//step8
//У файлі src/scripts/removeLastContact.js опишіть функцію removeLastContact, яка видалятиме останній контакт з масиву, якщо в масиві є хоча б один елемент.
//Перевірити роботу функції можна виконавши команду npm run remove-last, яка буде виконувати код у файлі src/scripts/removeLastContact.js. У файлі src/db/db.json мають відбутися відповідні зміни.
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (Array.isArray(contacts) && contacts.length > 0) {
      contacts.pop();
      await writeContacts(contacts);
      console.log('Останній контакт успішно видалено.');
    } else {
      console.log('Контакти відсутні або це не масив.');
    }
  } catch (error) {
    console.error('Помилка при видаленні останнього контакту:', error);
  }
};

removeLastContact();
