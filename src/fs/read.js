/*
read.js- реализовать функцию, выводящую содержимое fileToRead.txt
в консоль (если нет файла fileToRead.txt Error с сообщением 
FS operation failed, то нужно кинуть)
*/
import { readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
    try {
        const path = join(__dirname, 'files', 'fileToRead.txt');

     await readFile(path)
        .then((data) => {
            console.log(data.toString());
        })
        .catch(() => {
            throw new Error('FS operation failed');
        });
    } catch (error) {
        console.log('\x1b[31m' + error + '\x1b[0m');
    }    
};

read();