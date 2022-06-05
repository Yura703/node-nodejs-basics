/*
list.js- реализовать функцию, которая выводит весь массив имен файлов 
из files папки в консоль (если files папка не существует, Error сообщение 
FS operation failed должно быть выброшено)
*/
import { readdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const list = async (pathToFile) => {

  try {    
    const path = pathToFile ?? join(__dirname, 'files');
    
    const infoDir = await readdir(path, { withFileTypes: true }).catch(() => {
      throw new Error('FS operation failed');
    });

    for (let i = 0; i < infoDir.length; i++) {
      if (infoDir[i].isDirectory()) {
        const _path =  join(path, infoDir[i].name);

        list(_path);
        continue;
      }   

      console.log(infoDir[i].name);      
    }
  } catch (error) {
    console.log('\x1b[31m' + error + '\x1b[0m');
  }
};

list();
