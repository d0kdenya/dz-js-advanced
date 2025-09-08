/*
    Сделать 5 кнопок с текстом "Нажми меня" и div, где отображается
    число нажатий (по умолчанию 0).
    - При нажатии кнопки, текст на ней меняется на "Нажата!". У всех
    остальных - "Нажми меня"
    - С нажатием любой кнопки счётчик увеличивается на 1.
*/

'use strict';

const wrapper = document.querySelector('.button__wrapper');
const count = document.querySelector('.count');
let currentCount = 0;

let i = 0;

for (const el of [...wrapper.children]) {
    el.setAttribute('data-id', i++);
}

wrapper.addEventListener('click', (event) => {
    if (event.target.getAttribute('data-id')) {
        event.target.innerText = 'Нажата!';
        count.innerText = count.innerText = ++currentCount;
    }
})