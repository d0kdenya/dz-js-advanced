/*
    Сделать с помощью Set уникализацию массива объектов:
    [
        { id: 1, name: "Вася" },
        { id: 2, name: "Петя" },
        { id: 1, name: "Вася" },
    ]

    Подсказка: вам может понадобиться map и find
*/

'use strict';

const array = [
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 1, name: "Вася" },
];

let uniqueUsers = new Set(array.map((el) => array.find((item) => el.id === item.id)));

console.log('Result: ', uniqueUsers);