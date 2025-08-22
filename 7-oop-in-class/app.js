/*
    Повторите упражнение из раздела 7, но используя классы.
    Сделайте переопределение метода говорить для эльфа и орка.

    Создать базовый класс Персонажа с параметрами: раса, имя, язык и
    метод - говорить (выводит язык и имя в консоль).
    Создать класс Орка, который наследуется от Персонажа у которого
    есть оружие и который имеет метод - удара.
    Создать класс Эльфа, который наследуется от Персонажа, у
    которого есть типы заклинаний и метод - создать заклинание.

    Использовать прототипное наследование. Все методы просто
    выводят что-то в консоль
*/

'use strict';

class Person {
    #race;
    #name;
    #language;

    constructor(race, name, language) {
        this.#race = race;
        this.#name = name;
        this.#language = language;
    }

    get race() {
        return this.#race;
    }

    set race(race) {
        this.#race = race;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    get language() {
        return this.#language;
    }

    set language(language) {
        this.#language = language;
    }

    talk() {
        console.log(`Я ${this.race}! Меня зовут ${this.name} и мой язык - ${this.language}`);
    }
}

class Orc extends Person {
    weapon;

    constructor(race, name, language, weapon) {
        super(race, name, language);
        this.weapon = weapon;
    }

    talk() {
        console.log(`Я ${this.race}! Меня зовут ${this.name} и мой язык - ${this.language}! А ещё у меня есть ${this.weapon}`);
    }

    punch() {
       console.log(`Я ударил своим ${this.weapon}`);
    }
}

class Elf extends Person {
    spells = [];

    constructor(race, name, language) {
        super(race, name, language);
    }

    createSpell(spell) {
        this.spells.push(spell);
        console.log(`Я создал ${this.spells}`);
    }

    talk() {
        console.log(`Я ${this.race}! Меня зовут ${this.name} и мой язык - ${this.language}! А ещё у меня есть ${this.spells}`);
    }
}

const orc = new Orc('Орк', 'Тимон', 'Еврейский', 'Кувалда');
console.log('ОРК: ', orc);
orc.talk();
orc.punch();

const elf = new Elf('Эльф', 'Пумба', 'Русский');
console.log('ЭЛЬФ: ', elf);
elf.talk();
elf.createSpell('Молния');