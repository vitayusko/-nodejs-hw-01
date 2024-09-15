import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

//step2
export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
  } catch (error) {
    console.error('Ошибка чтения файла:', error);
    throw error;
  }
};
