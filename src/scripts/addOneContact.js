//step4
import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const contactList = Array.isArray(contacts) ? contacts : [];

    const newContact = createFakeContact();
    contactList.push(newContact);

    const dataToWrite = JSON.stringify(contactList, null, 2);

    console.log('Данные для записи в файл:', dataToWrite);

    await fs.writeFile(PATH_DB, dataToWrite, 'utf8');
    console.log('Новий контакт успішно записаний у файл.');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};

addOneContact();
