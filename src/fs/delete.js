/*
delete.js- реализовать функцию, которая удаляет файл fileToRemove.txt
(если нет файла fileToRemove.txt Error с сообщением FS operation failed, нужно выкинуть)
 */
import { unlink } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const remove = async () => {
    try {
        const pathFile = join(__dirname, 'files', 'fileToRemove.txt');  
        await unlink(pathFile).catch(() => {
            throw new Error('FS operation failed');
        });
        console.log('\x1b[32m' + 'File deleted successfully' + '\x1b[0m');
    } catch (error) {
        console.log('\x1b[31m' + error + '\x1b[0m');
    }   
};

remove();