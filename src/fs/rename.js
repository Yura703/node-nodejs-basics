/*
rename.js- реализовать функцию, которая переименовывает файл wrongFilename.txt
в properFilename с расширением .md (если файла нет wrongFilename.txt или он 
properFilename.md уже существует, Error сообщение FS operation failed должно быть выброшено)
*/
import { rename as renameFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const rename = async () => {
  try {
    const oldPath = join(__dirname, 'files', 'wrongFilename.txt');
    const newPath = join(__dirname, 'files', 'properFilename.md');
    
    await renameFile(oldPath, newPath)
      .then(() => {
        console.log('\x1b[32m' + 'File renamed successfully' + '\x1b[0m');
      })
      .catch(() => {
        throw new Error('FS operation failed');
      });
  } catch (error) {
    console.log('\x1b[31m' + error + '\x1b[0m');
  }
};

rename();
