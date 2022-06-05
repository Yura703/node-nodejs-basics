/*
compress.js- реализовать функцию, которая сжимает файл fileToCompress.txt
для archive.gz использования zlib и Streams API
*/

import zlib from 'zlib';
import { open } from 'fs/promises';
import { join, dirname } from 'path';
import { pipeline } from 'stream';
import { fileURLToPath } from 'url';

export const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const pathInput = join(__dirname, 'files', 'fileToCompress.txt');
    const pathOutput = join(__dirname, 'files', 'archive.gz');

    const gzip = zlib.createGzip();

    const fdRead = await open(pathInput);
    const rs = fdRead.createReadStream();

    const fdWrite = await open(pathOutput, 'w');
    const ws = fdWrite.createWriteStream();

    pipeline(
        rs,
        gzip,
        ws,
        (err) => {
            if (err) {
                console.log('Error: ' + err);
            }
        }
    );   
};

compress();
