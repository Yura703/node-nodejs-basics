/*
args.js- реализовать функцию, которая анализирует аргументы командной строки 
(данные в формате --propName value --prop2Name value2, вам не нужно его проверять) 
и выводит их на консоль в формате propName is value, prop2Name is value2
*/
import { argv } from 'process';

export const parseArgs = () => {
    try {
        const valueOne = argv[argv.indexOf('--propName') + 1];
        const valueTwo = argv[argv.indexOf('--prop2Name') + 1];

        console.log(`PropName is ${valueOne}, prop2Name is ${valueTwo}`); 
               
    } catch (error) {
        console.log('Error' + error);
    }    
};

parseArgs();