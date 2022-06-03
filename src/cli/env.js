/*
env.js- реализовать функцию, которая меняет переменные окружения на
с префиксом RSS_и выводит их на консоль в форматеRSS_name1=value1; RSS_name2=value2
*/

export const parseEnv = () => {
  try {
    let str = '';

    for (const obj in process.env) {      
      const objName = `RSS_${obj}`;
      const objKey = process.env[obj];
      str += `${objName}=${objKey};\n`;
    }

    console.log(str.slice(0, -2));
    
  } catch (error) {
    console.log('Error: ' + error);
  }
};

parseEnv();
