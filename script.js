'use strict';

// урок №5
let isNumber = function (n) {
  return !isNaN(parseFloat(n) && isFinite(n));
}

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

let money;
let income = "фриланс";
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Коммуналка, Еда, Интернет');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 500000;
let period = 12;

let start = function () {
  money = prompt('Ваш месячный доход?');
  
  while (!isNumber(money)) {
    money = prompt('Ваш месячный доход?');
  }
};

console.log(addExpenses.length);

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
let expenses = [];

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

const accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth());

if (accumulatedMonth === 0) {
  console.log('Ошибка, сделайте перерасчет');
} else {
  console.log('Бюджет на месяц: ', accumulatedMonth);
}

//результат месячного накопления
const getTargetMonth = function() {
  return Math.ceil(isFinite(mission / accumulatedMonth));
}

if (getTargetMonth === false) {
  console.log('Ошибка, цель не достигнута');
} else {
  console.log(`Цель будет достигнута за ${getTargetMonth(mission, accumulatedMonth)} месяцев(-а)`);
}

//бюджет за день
let budgetDay =  Math.floor(accumulatedMonth / 30);

console.log('Бюджет на день: ', budgetDay);

//фукция уровень дохода
const getStatusIncome = function (budget) {
  if (budget > 1200) {
  console.log('У вас высокий уровень дохода');
} else if (budget === 1200) {
  console.log('У вас почти получилось попасть в группу с высоким уровнем дохода');
} else if (budget > 600 && budgetDay < 1200) {
  console.log('У вас средний уровень дохода');
} else if (budget === 600) {
  console.log('У вас почти средний уровень дохода, но немного не хватает...');
} else if (budget < 600 && budget > 0) {
  console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budget < 0) {
  console.log('Что то пошло не так');
} else if (isNaN(budget)) {
  console.log('Где-то закралась ошибка...');
}
return budget;
};

console.log('getStatusIncome(): ', getStatusIncome(budgetDay));