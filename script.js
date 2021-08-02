'use strict';

// урок №3
let money = +prompt('Ваш месячный доход?');
console.log('type money: ', typeof money);

const income = "фриланс";
console.log('type income: ', typeof income);

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Коммуналка, Еда, Интернет');
console.log(addExpenses.length);

let deposit = confirm('Есть ли у вас депозит в банке?');
console.log('type deposit: ', typeof deposit);

let mission = 500000;

let period = 12;

console.log(`
  Период равен ${period} месяцев и
  Цель заработать ${mission} рублей
`);

console.log(addExpenses.toLowerCase().split(', '));




