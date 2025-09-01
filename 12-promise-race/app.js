/*
    Создать функцию race(), которая будет принимать массив Promise, и
    возвращать первый успешно выполненный или отклонённый.
*/

'use strict';

function race(promises) {
    return new Promise((resolve, reject) => {
        for (const promise of promises) {
            Promise.resolve(promise).then(resolve, reject);
        }
    });
}

const promise1 = new Promise((resolve) => setTimeout(() => resolve("Первый"), 1000));
const promise2 = new Promise((_, reject) => setTimeout(() => reject("Ошибка"), 500));
const promise3 = new Promise((resolve) => setTimeout(() => resolve("Третий"), 2000));

race([promise1, promise2, promise3])
    .then((value) => console.log("Успех:", value))
    .catch((err) => console.error("Провал:", err));