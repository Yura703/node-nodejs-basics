/*  
    реализовать функцию, которая создает новый файл 'fresh.txt' с 
    содержимым 'I am fresh and young' внутри 'files' папки (если файл уже существует, 
    Error сообщение 'FS operation failed' должно быть выброшено)
*/
import fs from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const create = async () => {
  try {
    const pathFile = join(__dirname, 'files', 'fresh.txt');

    const fileHandle = await fs.promises.open(pathFile, 'wx').catch(() => {
      throw new Error('FS operation failed');
    });
    fileHandle.write('I am fresh and young');
    console.log('\x1b[32m' + 'File created successfully' + '\x1b[0m');
  } catch (error) {
    console.log('\x1b[31m' + error + '\x1b[0m');
  }
};

create();
