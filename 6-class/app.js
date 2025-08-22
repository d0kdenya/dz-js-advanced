/*
    Создайте класс Car у которого есть марка, модель и пробег (все
    свойства приватные, задаются в конструкторе).
    - Сделайте для него возможность менять пробег через get и set.
    - Добавьте метод info, который выводит в консоль марку, модели
    и пробег.
*/

'use strict';

class Car {
    #brand;
    #model;
    #_mileage;

    constructor(brand, model, mileage) {
        this.#brand = brand;
        this.#model = model;
        this.mileage = mileage;
    }

    get mileage() {
        return this.#_mileage;
    }

    set mileage(mileage) {
        this.#_mileage = mileage;
    }

    info() {
        console.log(`Марка: ${this.#brand}, модель: ${this.#model}, пробег: ${this.#_mileage}!`);
    }
}

const solaris = new Car('Hyundai', 'Solaris', 450000);
solaris.info();
solaris.mileage = 590000;
solaris.info();