/*
main.js- реализовать функцию, которая создает количество рабочих потоков 
(равное количеству логических ядер процессора хост-машины) из файла worker.js
и способных отправлять данные в эти потоки и получать от них результат вычислений. 
Вы должны отправлять возрастающий номер, начиная с 10 каждого worker. 
Например: на хост-машине с 4 ядрами вы должны создать 4 воркера и отправить 10 на первый worker, 
11 на второй worker, 12 на третий worker, 13 на четвертый worker. После того, 
как все воркеры закончат работу, функция должна вернуть массив результатов. 
Результатом является массив объектов с двумя свойствами:
status- 'resolved'в случае успешного получения значения из workerили 'error'в случае ошибки в worker
data- значение от workerв случае успеха или nullв случае ошибки в воркере
Результаты в массиве должны быть в том же порядке, в котором были созданы рабочие процессы.
*/
import os from 'os';
import { Worker } from 'worker_threads';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

export const performCalculations = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const path = join(__dirname, 'worker.js');
  let cpuCount = os.cpus().length;


  for (let i = 0; i < cpuCount; i++) {
    new Promise((resolve, reject) => {
      const worker = new Worker(path, { workerData: { n: (10 + i) } });
      worker.on('message', resolve);
      worker.on('error', reject);
      worker.on('exit', (code) => {
        if (code !== 0)
          reject(new Error(`Worker stopped with exit code ${code}`));
      })
    })
  

    
    
  }
    
        
    
};

performCalculations();