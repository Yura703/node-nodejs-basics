/*
copy.js- реализовать функцию, которая копирует файлы папки files
со всем содержимым в папку files_copy того же уровня 
(если files папка не существует или files_copy уже создана, 
Error сообщение FS operation failed должно быть выброшено)
*/
import { join, dirname } from 'path';
import { mkdir, copyFile, readdir } from 'fs/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const copy = async () => {
  try {
    const pathInput = join(__dirname, 'files');
    const pathOutput = join(__dirname, 'files_copy');

    const infoDir = await readdir(pathInput, {
      withFileTypes: true,
    }).catch(() => {
      throw new Error('FS operation failed. Folder "file" does not exists');
    });

    await mkdir(pathOutput, {
      recursive: false,
    }).catch(() => {
      throw new Error(
        'FS operation failed. Folder "files_copy" has already been created'
      );
    });

    for (let i = 0; i < infoDir.length; i++) {
      if (infoDir[i].isDirectory()) {
        await copyDir(
          join(pathInput, infoDir[i].name),
          join(pathOutput, infoDir[i].name)
        );
      } else
        await copyFile(
          join(pathInput, infoDir[i].name),
          join(pathOutput, infoDir[i].name)
        );
    }
    console.log('\x1b[32m' + 'Folder copied successfully' + '\x1b[0m');
  } catch (error) {
    console.log('\x1b[31m' + error + '\x1b[0m');
    process.exit(1);
  }
};

copy();
