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
let currentCount = +count.innerText;

let i = 0;

for (const el of [...wrapper.children]) {
    el.setAttribute('data-id', i++);
}

wrapper.addEventListener('click', (event) => {
    const dataId = event.target.getAttribute('data-id');

    if (dataId) {
        for (const el of [...wrapper.children]) {
            const currentDataId = el.getAttribute('data-id');
            if (currentDataId === dataId) {
                el.innerText = 'Нажата!';
                count.innerText = count.innerText = ++currentCount;
            } else {
                el.innerText = 'Нажми меня!';
            }
        }
    }
})