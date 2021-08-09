'use strict';

// урок №8
let isNumber = (n) => {
  return !isNaN(parseFloat(n) && isFinite(n));
}

let money,
    start = () => {
        do {
            money = prompt('Ваш месячный доход?', 60000);
        } while (!isNumber(money));
    };

start();

let appData = {
  
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 500000,
  period: 12,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  
  asking() {

    if (confirm('Есть ли у вас дополнительный источник заработка')) {
      let itemIncome = prompt('Какой у вас дополнительный заработок?', 'фриланс');
      let cashIncome = prompt('сколько в месяц вы на этом зарфбатываете?', 15000);
      appData.income[itemIncome] = cashIncome;

    }

    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'интернет, такси, коммуналка');
    appData.addExpenses = addExpenses.toLowerCase().split(',');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    
    for (let i = 0; i < 2; i++) {
      appData.expenses[prompt('Введите обязательную статью расходов?')] = (() => {
        let num = 0;
        do {
          num = prompt('Во сколько это обойдется?');
        } while (!isNumber(num));
        return +num;
      })();
    }
  },
  //возвращает сумму обязательных расходов
  getExpensesMonth() {
    
    for (let key in appData.expenses) {
      appData.expensesMonth += appData.expenses[key];
    }
  },

  //возвращает  накопления за месяц. Доход минус расходы
  getBudget() {
    
    if (!appData.budget) {
      appData.budget = 0;
  }
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },
  
  //результат месячного накопления
  getTargetMonth() {
    let periodMission = Math.ceil(isFinite(appData.mission / appData.budgetMonth));
      if (periodMission === false && periodMission <= 0){
        console.log('Цель не будет достигнута');
      } else {
        console.log(`Цель будет достигнута за ${periodMission} месяцев(-а)`);
        
      }
  },
  
  //функция уровень дохода
  getStatusIncome() {
  let budget = appData.budget;
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
  },

  getInfoDeposit() {
    if (appData.deposit) {
      appData.percentDeposit = prompt('Какой годовой процент?', '10');
      appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
    }
  },

  calcSavedMoney() {
    return appData.budgetMonth * appData.period;
  }
};

appData.asking();

appData.getExpensesMonth();

appData.getBudget();

appData.getTargetMonth();

appData.getInfoDeposit();

console.log('Расходы за месяц: ', appData.expensesMonth);

console.log('Уровень дохода: ', appData.getStatusIncome());

console.log('Наша программа включает в себя данные: ');
for (let elem in appData) {
    console.log(elem, appData[elem]);
}
