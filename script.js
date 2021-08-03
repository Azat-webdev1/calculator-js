'use strict';

// урок №4
let money = +prompt('Ваш месячный доход?', 60000);

function numberHandler(text) {
  let value = +prompt(text);

  if (null || value === 0) {
    confirm('Введите значение');
    return numberHandler();
  } else if (isNaN(parseFloat(value))) {
    confirm('Пожалуйста введите только цифры');
    return numberHandler();
  } else {
    return value;
  }
}

numberHandler(money);

const income = "фриланс";

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Коммуналка, Еда, Интернет');
console.log(addExpenses.length);

let deposit = confirm('Есть ли у вас депозит в банке?');

let mission = 500000;

let period = 12;

let showTypeof = function (data) {
  console.log(data, typeof (data));
};

showTypeof(money);
showTypeof(income);
showTypeof(deposit);

console.log(`
  Период равен ${period} месяцев и
  Цель заработать ${mission} рублей
`);

console.log(addExpenses.toLowerCase().split(','));

let expenses1 = prompt('Введите обязательную статью расходов?', 'продукты');
let amount1 = +prompt('Во сколько это обойдется?', 12000);

numberHandler(amount1);

let expenses2 = prompt('Введите обязательную статью расходов?', 'транспорт');
let amount2 = +prompt('Во сколько это обойдется?', 2500);

numberHandler(amount2);

//сумму всех обязательных расходов за месяц
const getExpensesMonth = function() {
  if (!amount1) { amount1 = 0; }
  if (!amount2) { amount2 = 0; }
  return (amount1 + amount2);
}

console.log('Обязательные расходы за месяц: ', getExpensesMonth());

//бюджет за месяц
const getAccumulatedMonth = function (moneyMonth, expensesMonth) {
  if (!moneyMonth) { moneyMonth = 0; }
  return moneyMonth - expensesMonth;
}









