'use strict';

// урок №11
const start = document.getElementById('start');
const btnPlus = document.getElementsByTagName('button');
const incomePlus = btnPlus[0];
const expensesPlus = btnPlus[1]; 

const checkboxDepositCheck = document.querySelector('#deposit-check');
const additionalIncomeItem = document.querySelectorAll('.additional_income-item');

const budgetMonthValue = document.getElementsByClassName('budget_month-value');
const budgetDayValue = document.getElementsByClassName('budget_day-value');
const expensesMonthValue = document.getElementsByClassName('expenses_month-value');
const additionalIncomeValue = document.getElementsByClassName('additional_income-value');
const additionalExpensesValue = document.getElementsByClassName('additional_expenses-value');
const incomePeriodValue = document.getElementsByClassName('income_period-value');
const targetMonthValue = document.getElementsByClassName('target_month-value');

const salaryAmount = document.querySelector('.salary-amount');
const incomeTitle = document.querySelector('.income-title');
const incomeAmount = document.querySelector('.income-amount');
const expensesTitle = document.querySelector('.expenses-title');
const expensesItems = document.querySelectorAll('.expenses-items');
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const depositAmount = document.querySelector('.deposit-amount');
const depositPercent = document.querySelector('.deposit-percent');
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');

let isNumber = (n) => {
  return !isNaN(parseFloat(n) && isFinite(n));
};

let isString = (str, comma = false) => {
  const pattern = comma ? /^[, а-яА-ЯёЁa-zA-Z]+$/ : /^[ а-яА-ЯёЁa-zA-Z]+$/;
  return pattern.test(str);
};

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
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  
  start() {
    if (salaryAmount.value === '') {
      alert('Ошибка поле "Месячный доход" должно быть заполнено!');
      return;
    }
    appData.budget = salaryAmount.value;
  
    appData.getExpenses();
    
    appData.getExpensesMonth();
    appData.getBudget();
    appData.getAddExpenses();
    appData.getAddIncome();
    appData.showResult();
  },
  
  showResult() {
    budgetMonthValue.value = appData.budgetMonth;
    budgetDayValue.value = appData.budgetDay;
    expensesMonthValue.value = appData.expensesMonth;
    additionalExpensesValue.value = appData.addExpenses.join(', ');
    additionalIncomeValue.value = appData.addIncome.join(', ');
  },
  
  addExpensesBlock() {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');
    if (expensesItems.length === 3) {
      expensesPlus.style.display = 'none';
    }
  },
  
  getExpenses() {
    expensesItems.forEach((item) => {
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if (itemExpenses !== '' && cashExpenses !== '') {
        appData.expenses[itemExpenses] = cashExpense;
      }
    });
  },
  
  getAddExpenses() {
    let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach((item) => {
            item = item.trim();
            if (item !== '') {
                appData.addExpenses.push(item);
            }
        });
  },
  
  getAddIncome() {
    additionalIncomeItem.forEach((item) => {
      let itemValue = item.value.trim();
      if (itemValue !== '') {
        appData.addIncome.push(itemValue);
      }
    })
  },
  
  asking() {

    if (confirm('Есть ли у вас дополнительный источник заработка')) {
      
      let itemIncome = '';
      while (!isString(itemIncome)) {
        itemIncome = prompt('Какой у вас дополнительный заработок?', 'фриланс');
      }
      
      let cashIncome = 0;
      while (!isNumber(cashIncome)) {
        cashIncome = prompt('сколько в месяц вы на этом зарфбатываете?', 15000);
      }
      
      appData.income[itemIncome] = +cashIncome;
    }
    
    let addExpenses = '';
    do {
      addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
          'интеРнет,такси,коммунаЛка');
    } while (!isString(addExpenses, true));
    
    appData.addExpenses = addExpenses.split(',')
    .map(val => val.charAt(0).toUpperCase() + val.substr(1).toLowerCase())
    .join(', ');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    
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
      let n = 0;
      do {
          n = prompt('Какой годовой процент?', '10');
      } while (!isNumber(n) && n < 0);
      appData.precentDeposit = +n;
      do {
          appData.moneyDeposit = prompt('Какая сумма заложена?', 15000);
      } while (!isNumber(n) && n < 0);
      appData.moneyDeposit = +n;
    }
  },

  calcSavedMoney() {
    return appData.budgetMonth * appData.period;
  }
};

start.addEventListener('click', appData.start);

expensesPlus.addEventListener('click', appData.addExpensesBlock);



