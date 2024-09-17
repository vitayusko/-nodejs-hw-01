//step6
//У файлі src/scripts/countContacts.js опишіть функцію countContacts. Вона має повертати кількість контактів в масиві у файлі src/db/db.json.Переконайтесь, що функція точно рахує кількість контактів.
//Перевірити роботу функції можна виконавши команду npm run count, яка буде виконувати код у файлі src/scripts/countContacts.js.

import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    if (!Array.isArray(contacts)) {
      console.log('Файл не содержит массив контактов.');
      return 0;
    }
    const contactCount = contacts.length;
    console.log(`Количество контактов: ${contactCount}`);
    return contactCount;
  } catch (error) {
    console.error('Ошибка при чтении файла:', error);
    return 0;
  }
};

console.log(await countContacts());
