//step2

import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    if (error.code === 'ENOENT') {
      return [];
    } else {
      console.error('Помилка читання файлу:', error);
      throw error;
    }
  }
};
