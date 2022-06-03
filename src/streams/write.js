/*
write.js- реализовать функцию, которая записывает process.stdin
данные в содержимое файла fileToWrite.txt, используя Writable Stream
*/

//!Для завершения ввода нажмите "CTRL C"
import { open } from 'fs/promises';
import { join, dirname } from 'path';
import { stdin } from 'process';
import { pipeline } from 'stream';
import { fileURLToPath } from 'url';

export const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const path = join(__dirname, 'files', 'fileToWrite.txt');

    const fd = await open(path, 'r+');
    const ws = fd.createWriteStream();

    pipeline(
        stdin,
        ws,
        
        (err) => {
            if (err) {
                console.log('Error: ' + err);
            }
        }
    );    
};

write();