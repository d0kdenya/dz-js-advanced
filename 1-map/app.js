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

const uniqueIds = new Set(array.map((item) => item.id));
const uniqueUsers = Array.from(uniqueIds).map((id) => array.find((item) => item.id === id));

console.log('Result: ', uniqueUsers);