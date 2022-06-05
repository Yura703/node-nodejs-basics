/*
args.js- реализовать функцию, которая анализирует аргументы командной строки 
(данные в формате --propName value --prop2Name value2, вам не нужно его проверять) 
и выводит их на консоль в формате propName is value, prop2Name is value2
*/
// для проверки введите в консоль: node <путь к файлу ...\args.js> --propName value1 --prop2Name  value2

import { argv } from 'process';

export const parseArgs = () => {
    try {
        const ind1 = argv.indexOf('--propName');
        const valueOne = (ind1 !== -1) ?  argv[ind1 + 1] : null; 

        const ind2 = argv.indexOf('--prop2Name');
        const valueTwo = (ind2 !== -1) ?  argv[ind2 + 1] : null; 
        

        if(valueOne && valueTwo) {
            console.log(`PropName is ${valueOne}, prop2Name is ${valueTwo}`); 
        } else {
            throw new Error('no arguments received');
        }        
               
    } catch (error) {
        console.log('Error:' + error);
    }    
};

parseArgs();