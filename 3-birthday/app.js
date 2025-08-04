/*
    Сделать функцию валидации возраста. На вход передаётся строка
    даты рождения пользователя вида "2022-01-01".
    Необходимо вывести true, если ему больше 14 лет и false, если меньше
*/

'use strict';

function isMore14YearsOld(birthdayString) {
    const now = new Date();
    const birthday = new Date(birthdayString);

    const yearDiff = now.getFullYear() - birthday.getFullYear();

    if (yearDiff > 14) {
        return true;
    } else if (yearDiff < 14) {
        return false;
    } else {
        const monthDiff = now.getMonth() - birthday.getMonth();

        if (monthDiff < 0) {
            return false;
        } else if (monthDiff > 0) {
            return true;
        } else {
            const dayDiff = now.getDate() - birthday.getDate();

            if (dayDiff < 0) {
                return false;
            }
            return true;
        }
    }
}

console.log("3 года: " + isMore14YearsOld('2022-01-01'));
console.log("14 лет: " + isMore14YearsOld('2011-01-01'));
console.log("13 лет: " + isMore14YearsOld('2012-01-01'));
console.log("20 лет: " + isMore14YearsOld('2005-01-01'));
console.log("14 лет: " + isMore14YearsOld('2011-08-02'));
console.log("14 лет: " + isMore14YearsOld('2011-08-03'));
