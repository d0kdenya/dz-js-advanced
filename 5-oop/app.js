/*
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

const Person = function(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
}

Person.prototype.talk = function() {
    console.log(`Меня зовут ${this.name} и мой язык - ${this.language}`);
}

function Ork(race, name, language, weapon) {
    Person.call(this, race, name, language);
    this.weapon = weapon;
}

Ork.prototype = Object.create(Person.prototype);
Ork.prototype.constructor = Ork;

Ork.prototype.punch = function() {
    console.log(`Я ${this.race}!`);
    this.talk();
    console.log('И я ударил!!!');
}

const ork = new Ork('Орк', 'Тимон', 'Еврейский', 'Кувалда');
console.log('ОРК: ', ork);
ork.talk();
ork.punch();


/* Создать класс Эльфа, который наследуется от Персонажа, у
    которого есть типы заклинаний и метод - создать заклинание. */

function Elf(race, name, language) {
    Person.call(this, race, name, language);
    this.spells = [];
}

Elf.prototype = Object.create(Person.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.createSpell = function(name) {
    this.spells.push(name);
    console.log(`Я создал ${name}`);
}

const elf = new Elf('Эльф', 'Пумба', 'Русский');
console.log('ЭЛЬФ: ', elf);
elf.talk();
elf.createSpell('Молния');