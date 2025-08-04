/*
    Сделать функцию для настольных игр. Она которая принимает тип
    dice, который надо бросить: d4, d6, d8, d10, d12, d16, d20 и
    возвращает случайное целое число на этом интервале с
    включёнными границами:

    - d6 - возможные значения - 1, 2, 3, 4, 5, 6
*/

'use strict';

function roll(dice) {
    const dices = [4, 6, 8, 10, 12, 16, 20];

    const min = 1;
    const max = dices.find(d => d === Number(dice.split('d')[1]));

    if (!max) {
        return null;
    }

    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log('Roll d4: ', roll('d4'));
console.log('Roll d6: ', roll('d6'));
console.log('Roll d8: ', roll('d8'));
console.log('Roll d10: ', roll('d10'));
console.log('Roll d12: ', roll('d12'));
console.log('Roll d16: ', roll('d16'));
console.log('Roll d20: ', roll('d20'));
console.log('Roll d5: ', roll('d5'));
