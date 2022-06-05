/*
Вы должны реорганизовать файл (вы можете добавить дополнительные импорты, если это необходимо)
cjsToEsm.cjs- перепишите его на эквивалент в нотации ECMAScript (и переключите расширение на .mjs)
*/
import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { readFileSync } from 'fs';
const random = Math.random();

let unknownObject;

if (random > 0.5) {
    //unknownObject = import('./files/a.json', { assert: { type: 'json' }});
    unknownObject = JSON.parse(readFileSync(path.join(__dirname, 'files', 'a.json')));
} else {
    //unknownObject = import('./files/b.json', { assert: { type: 'json' }});
    unknownObject = JSON.parse(readFileSync(path.join(__dirname, 'files', 'b.json')));
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is '${path.sep}'`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export {
    unknownObject,
    createMyServer,
};
