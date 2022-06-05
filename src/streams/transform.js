/*
transform.js- реализовать функцию, которая считывает данные из process.stdin, 
переворачивает текст с помощью Transform Stream и затем записывает его в process.stdout
*/

//!Для завершения ввода нажмите "CTRL C"
import { stdin, stdout } from 'process';
import { Transform, pipeline } from 'stream';

export const transform = async () => {     
    
    const ts = new Transform({
        transform(chunk, enc, cb) {
          reverseString(chunk.toString()).then((data) => {
            chunk = data;
            this.push(chunk);
            cb();
        });
      },
    });

    async function reverseString(str) {
        const _str = str.slice(0, -1).split('').reverse().join('');
        return _str + '\n';
    }

    pipeline(
        stdin,
        ts,
        stdout,
        
        (err) => {
            if (err) {
                console.log('Error: ' + err);
            }
        }
    );    
};

transform();
