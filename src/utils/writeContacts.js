import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const dataToWrite = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, dataToWrite, 'utf-8');
  } catch (error) {
    console.error('Помилка запису у файл:', error);
    throw error;
  }
};
