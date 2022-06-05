/*
calcHash.js- реализовать функцию, которая вычисляет хэш SHA256 для файла 
fileToCalculateHashFor.txt и возвращает его как hex
*/
import { createHash } from 'crypto';
import { open } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const calculateHash = async () => {
    const path = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

    const hash = createHash('sha256');

    const fd = await open(path);
    const rs = fd.createReadStream();

    rs.on('data', (chunk) => {
      hash.update(chunk);
    });
    
    return new Promise((res) => {
      rs.on("end", () => {
        const hex = hash.digest('hex');
        res(hex);
      });
    });
};

console.log(await calculateHash());