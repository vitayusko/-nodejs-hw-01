//step7
// У файлі src/scripts/removeAllContacts.js опишіть функцію removeAllContacts. Вона має видаляти усі контакти з масиву у файлі src/db/db.json.
//Перевірити роботу функції можна виконавши команду npm run remove - all, яка буде виконувати код у файлі src / scripts / removeAllContacts.js.У файлі src / db / db.json мають відбутися відповідні зміни.

import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    const emptyContacts = [];

    await fs.writeFile(
      PATH_DB,
      JSON.stringify(emptyContacts, null, 2),
      'utf-8',
    );
    console.log('Все контакты успешно удалены.');
  } catch (error) {
    console.error('Ошибка при удалении всех контактов:', error);
  }
};

removeAllContacts();
