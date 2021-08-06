'use strict';

// урок №7
let isNumber = (n) => {
  return !isNaN(parseFloat(n) && isFinite(n));
}

let money;

let start = function () {
  money = +prompt('Ваш месячный доход?');
  
  do {
    money;
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
  
  asking() {
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    
    let costs = [];
    let sum = 0;
  
    for (let i = 0; i < 4; i++) {
      
      costs[i] = prompt('Введите обязательную статью расходов?');
      
        sum += (() => {
          let num = 0;
          do {
              num = prompt('Во сколько это обойдется?');
          } while (!isNumber(n));
          return +num;
      })();
    }
      return appData.expenses = +sum;
  },
  
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  
  getExpensesMonth() {
  
  },

  //бюджет за месяц
  getAccumulatedMonth(moneyMonth, expensesMonth) {
  
    if (!moneyMonth) {
      moneyMonth = 0;
    }
  
    return moneyMonth - expensesMonth;
  },
  
  //результат месячного накопления
  getTargetMonth() {
    return Math.ceil(isFinite(appData.mission / accumulatedMonth));
  },
  
  //функция уровень дохода
  getStatusIncome (budget) {
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
  }
};

appData.asking();

console.log(appData.addExpenses.length);

let expensesAmount = appData.getExpensesMonth();

console.log('Обязательные расходы за месяц: ', expensesAmount);

let accumulatedMonth = appData.getAccumulatedMonth(money, expensesAmount);

if (accumulatedMonth === 0) {
  console.log('Ошибка, сделайте перерасчет');
} else {
  console.log('Бюджет на месяц: ', accumulatedMonth);
}

let targetMonth = appData.getTargetMonth();

if (targetMonth === false && targetMonth < 0) {
  console.log('Цель не будет достигнута');
} else {
  console.log(`Цель будет достигнута за ${appData.getTargetMonth(appData.mission, accumulatedMonth)} месяцев(-а)`);
}

//бюджет за день
let budgetDay = Math.floor(accumulatedMonth / 30);

console.log('Бюджет на день: ', budgetDay);

console.log('Уровень дохода: ', appData.getStatusIncome(budgetDay));