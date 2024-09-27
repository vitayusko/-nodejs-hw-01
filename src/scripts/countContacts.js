//step6
//У файлі src/scripts/countContacts.js опишіть функцію countContacts. Вона має повертати кількість контактів в масиві у файлі src/db/db.json.Переконайтесь, що функція точно рахує кількість контактів.
//Перевірити роботу функції можна виконавши команду npm run count, яка буде виконувати код у файлі src/scripts/countContacts.js.

import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    if (!Array.isArray(contacts)) {
      console.log('Файл не містить масив контактів.');
      return 0;
    }
    const contactCount = contacts.length;
    console.log(`Кількість контактів: ${contactCount}`);
    return contactCount;
  } catch (error) {
    console.error('Помилка при зчитуванні файлу:', error);
    return 0;
  }
};

countContacts();
