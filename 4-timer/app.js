/*
    Сделать приложение, которое в браузере выводи таймер
    реального времени, который показывает сколько осталось до
    нового года в формате:

    10 месяцев, 5 дней, 10 часов, 6 минут, 5 секунд
*/

'use strict';

const timerEl = document.querySelector('.timer');

function timer() {
    const now = new Date();
    const newYear = new Date(`${now.getFullYear() + 1}-01-01T00:00:00`);
    let timeDiff = newYear.getTime() - now.getTime();

    const months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30));
    timeDiff -= months * 30 * 24 * 60 * 60 * 1000;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    timeDiff -= days * 24 * 60 * 60 * 1000;

    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    timeDiff -= hours * 60 * 60 * 1000;

    const minutes = Math.floor(timeDiff / (1000 * 60));
    timeDiff -= minutes * 60 * 1000;

    const seconds = Math.floor(timeDiff / 1000);

    timerEl.textContent = `${months} месяцев, ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;
};

setInterval(() => {
    timer();
}, 1000);