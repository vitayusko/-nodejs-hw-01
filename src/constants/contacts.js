//step1 (done)
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const PATH_DB = path.resolve(__dirname, '../db/db.json');
