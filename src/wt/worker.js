/*
worker.js- расширить данную функцию для работы с данными, 
полученными из основного потока, и реализовать функцию, 
которая отправляет результат вычислений в основной поток
*/

import { workerData, parentPort } from 'worker_threads';

// n should be received from main thread
export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
    const nf = nthFibonacci(workerData.n);
    console.log(n + '--' + nf);
    // This function sends result of nthFibonacci computations to main thread
};

