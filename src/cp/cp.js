/*
cp.js- реализовать функцию spawnChildProcess, которая получает массив аргументов 
args и создает дочерний процесс из файла script.js, передавая их argsе му. 
Эта функция должна создать IPC-канал между главным процессом и дочерним процессом stdin:stdout
дочерний процесс stdin должен получать данные от главного процесса stdin
дочерний процесс stdout должен отправлять данные главному процессу stdout
*/
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import childProcess from 'child_process';

export const spawnChildProcess = async (args) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const path = join(__dirname, 'files', 'script.js');
    
    //version with the "fork" same working
    //const child = childProcess.fork(path, process.argv.slice(2));

    const child = childProcess.spawn('node', [path, ...process.argv.slice(2)]);
    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);    
};

spawnChildProcess();