//step4
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const contactList = Array.isArray(contacts) ? contacts : [];

    const newContact = createFakeContact();

    contactList.push(newContact);

    await writeContacts(contactList);
  } catch (err) {
    console.error('Помилка при додаванні контакту:', err);
  }
};

addOneContact();
