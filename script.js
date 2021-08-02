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

let expenses1 = prompt('Введите обязательную статью расходов?', 'продукты');
let amount1 = +prompt('Во сколько это обойдется?', 12000);
let expenses2 = prompt('Введите обязательную статью расходов?', 'транспорт' );
let amount2 = +prompt('Во сколько это обойдется?', 2500);

let budgetMonth = +money - (amount1 + amount2);
console.log('Бюджет на месяц: ', budgetMonth);

console.log(`Цель будет достигнута за ${Math.ceil(mission / budgetMonth)} месяцев(-а)`);

let budgetDay =  Math.floor(money / 30);

console.log('Бюджет на день: ', budgetDay);

