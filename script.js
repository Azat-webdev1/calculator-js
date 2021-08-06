'use strict';

// урок №7
let isNumber = function (n) {
  return !isNaN(parseFloat(n) && isFinite(n));
}

let money;

let start = function () {
  money = prompt('Ваш месячный доход?');
  
  do {
    money = +prompt('Ваш месячный доход?');
    !isNumber(money);
  } while (!isNumber(money));
  --money;
};

start();

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 500000,
  period: 12,
  asking: function () {
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Коммуналка, Еда, Интернет');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
  },
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0
};
  
console.log(appData.addExpenses.length);

console.log(`
  Период равен ${appData.period} месяцев и
  Цель заработать ${appData.mission} рублей
`);

let expenses = [];

//сумму всех обязательных расходов за месяц
const getExpensesMonth = function () {
  let sum = 0;

  for (let i = 0; i < 4; i++) {
    
    expenses[i] = prompt('Введите обязательную статью расходов?');
    
      sum += (() => {
        let n = 0;
        do {
            n = prompt('Во сколько это обойдется?');
        } while (!isNumber(n));
        return +n;
    })();
  }
  console.log(expenses);
  return sum;
};

let expensesAmount = getExpensesMonth();

console.log('Обязательные расходы за месяц: ', expensesAmount);

//бюджет за месяц
const getAccumulatedMonth = function (moneyMonth, expensesMonth) {
  
  if (!moneyMonth) {
    moneyMonth = 0;
  }
  
  return moneyMonth - expensesMonth;
}

const accumulatedMonth = getAccumulatedMonth(money, expensesAmount);

if (accumulatedMonth === 0) {
  console.log('Ошибка, сделайте перерасчет');
} else {
  console.log('Бюджет на месяц: ', accumulatedMonth);
}

//результат месячного накопления
const getTargetMonth = function() {
  return Math.ceil(isFinite(appData.mission / accumulatedMonth));
}

if (getTargetMonth === false && getTargetMonth < 0) {
  console.log('Цель не будет достигнута');
} else {
  console.log(`Цель будет достигнута за ${getTargetMonth(appData.mission, accumulatedMonth)} месяцев(-а)`);
}

//бюджет за день
let budgetDay = Math.floor(accumulatedMonth / 30);

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