//step5
// У файлі src/scripts/getAllContacts.js опишіть функцію getAllContacts. Вона має повертати масив контактів із файлу src/db/db.json. Функція має коректно читати масив контактів з файлу.
// Перевірити роботу функції можна виконавши команду npm run get-all, яка буде виконувати код у файлі src/scripts/getAllContacts.js.

import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts(); // Використовуємо утиліту для зчитування контактів
    console.log('Список всіх контактів:', contacts);
  } catch (error) {
    console.error('Помилка при зчитуванні контактів:', error);
    return [];
  }
};

getAllContacts();
