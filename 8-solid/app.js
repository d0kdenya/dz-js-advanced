/*
    Спроектируйте класс Billing со свойством amount и методом
    calculateTotal для расчёта счёта. Сделайте разный calculateTotal для
    разных типов:
    - fixBilling - где нужно вернуть amount как результат
    - hourBilling - который считает amount * число часов
    - itemBilling - где считается amount * число элементов

    Соблюдайте принцип открытости / закрытости!
*/

'use strict';

class Billing {
    amount;

    constructor(amount) {
        this.amount = amount;
    }

    calculateTotal() {};
}

class FixBilling extends Billing {
    constructor(amount) {
        super(amount);
    }

    calculateTotal() {
        return this.amount;
    }
}

class HourBillint extends Billing {
    hour;

    constructor(amount, hour) {
        super(amount);
        this.hour = hour;
    }

    calculateTotal() {
        return this.amount * this.hour;
    }
}

class ItemBilling extends Billing {
    item;

    constructor(amount, item) {
        super(amount);
        this.item = item;
    }

    calculateTotal() {
        return this.amount * this.item;
    }
}

const fixBilling = new FixBilling(100);
const hourBilling = new HourBillint(100, 10);
const itemBilling = new ItemBilling(100, 20);

console.log('fixBilling: ', fixBilling.calculateTotal());
console.log('hourBilling: ', hourBilling.calculateTotal());
console.log('itemBilling: ', itemBilling.calculateTotal());