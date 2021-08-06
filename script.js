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
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  
  asking() {
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
    
    let costs = [];
    let sum = 0;
  
    for (let i = 0; i < 2; i++) {
      
      costs[i] = prompt('Введите обязательную статью расходов?');
      
        sum += (() => {
          let num = 0;
          do {
              num = prompt('Во сколько это обойдется?');
          } while (!isNumber(num));
          return +num;
      })();
    }
      return appData.expenses = +sum;
  },
  
  //возвращает сумму обязательных расходов
  getExpensesMonth() {
    
    for (let key in appData.expenses) {
      appData.expensesMonth += +appData.expenses[key];
    }
    return appData.expensesMonth;
  },

  //возвращает  накопления за месяц. Доход минус расходы
  getBudget() {
    
    appData.budgetMonth = appData.butget - appData.expensesMonth;
      
    return appData.budgetMonth;
  },
  
  //результат месячного накопления
  getTargetMonth() {
    let periodMission = Math.ceil(isFinite(appData.mission / appData.getBudget()));
      if (periodMission === false && periodMission < 0){
        console.log('Цель не будет достигнута');
      } else {
        console.log(`Цель будет достигнута за ${periodMission} месяцев(-а)`);
        
      }
      return periodMission;
  },
  
  //функция уровень дохода
  getStatusIncome() {
    appData.budgetDay = Math.floor(appData.getBudget() / 30);
    let budget = appData.budgetDay;
    
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

appData.getExpensesMonth();

appData.getBudget();

appData.getTargetMonth();

appData.getStatusIncome();

console.log('Сумма обязательных расходов ' + appData.expensesMonth);

console.log(appData.getStatusIncome());

for (let key in appData) {
  
  console.log(`Наша программа включает в себя данные:  ${key}  ${appData[key]}`);
}