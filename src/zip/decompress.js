/*
decompress.js- реализовать функцию, которая распаковывает archive.gz обратно в тот fileToCompress.txt
же контент, что и до сжатия, используя zlibи Streams API
*/
import zlib from 'zlib';
import { open } from 'fs/promises';
import { join, dirname } from 'path';
import { pipeline } from 'stream';
import { fileURLToPath } from 'url';

export const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const pathInput = join(__dirname, 'files', 'archive.gz');
    const pathOutput = join(__dirname, 'files', 'fileToCompress.txt');
    

    const gunZip = zlib.createGunzip();

    const fdRead = await open(pathInput);
    const rs = fdRead.createReadStream();

    const fdWrite = await open(pathOutput, 'w');
    const ws = fdWrite.createWriteStream();

    pipeline(
        rs,
        gunZip,
        ws,
        (err) => {
            if (err) {
                console.log('Error: ' + err);
            }
        }
    );   
};

decompress();