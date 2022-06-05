/*
read.js- реализовать функцию, которая читает fileToRead.txt
содержимое файла с помощью Readable Stream и печатает его содержимое в process.stdout
*/
import { open } from 'fs/promises';
import { join, dirname } from 'path';
import { pipeline } from 'stream';
import { fileURLToPath } from 'url';

export const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const path = join(__dirname, 'files', 'fileToRead.txt');

    const fd = await open(path);
    const rs = fd.createReadStream();

    pipeline(
        rs,
        process.stdout,
        (err) => {
            if (err) {
                console.log('Error: ' + err);
            }
        }
    );    
};

read();
