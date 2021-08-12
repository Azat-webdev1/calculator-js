'use strict';

// урок №13
const start = document.getElementById('start');
const btnPlus = document.getElementsByTagName('button');
const incomePlus = btnPlus[0];
const expensesPlus = btnPlus[1];

const depositCheck = document.querySelector('#deposit-check');
const additionalIncomeItem = document.querySelectorAll('.additional_income-item');

const budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
const budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
const expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
const additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
const additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
const incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
const targetMonthValue = document.getElementsByClassName('target_month-value')[0];

const salaryAmount = document.querySelector('.salary-amount');
//const incomeTitle = document.querySelector('.income-title');
const incomeItems = document.querySelectorAll('.income-items');
//const expensesTitle = document.querySelector('.expenses-title');
const expensesItems = document.querySelectorAll('.expenses-items');
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const depositAmount = document.querySelector('.deposit-amount');
const depositPercent = document.querySelector('.deposit-percent');
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');
const dataInputTypeText = document.querySelectorAll('.data input[type=text]');
const inputTypeText = document.querySelectorAll('input[type=text]');
const periodAmount = document.querySelector('.period-amount');

let isNumber = (n) => {
  return !isNaN(parseFloat(n) && isFinite(n));
};

let isString = (str, comma = false) => {
  const pattern = comma ? /^[, а-яА-ЯёЁa-zA-Z]+$/ : /^[ а-яА-ЯёЁa-zA-Z]+$/;
  return pattern.test(str);
};

let appData = {

  income: {},
  incomeMonth: 0,
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,

  start() {

    this.budget = +salaryAmount.value;

    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getBudget();

    this.showResult();

    if (start.textContent === 'Рассчитать') {
      this.blockInputs();
      start.textContent = 'Сбросить';
    } else {
      start.textContent = 'Рассчитать';
      this.reset();
    }
  },

  blockInputs(disabled = true) {
    dataInputTypeText.forEach(item => {
      item.disabled = disabled;
    });
  },

  reset() {

    incomeItems.forEach((item) => {
      item.parentNode.removeChild(item[i]);
    });

    expensesItems.forEach((item) => {
      item.parentNode.removeChild(item[i]);
    });
    
    incomePlus.style.display = '';
    expensesPlus.style.display = '';
    this.blockInputs(false);
    inputTypeText.forEach(item => {
      item.value = '';
    });
    this.getBudget();
    periodSelect.value = periodAmount.textContent = 1;
    this.blockStart();
  },

  showResult() {
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = Math.floor(this.budgetDay);
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcPeriod();
    periodSelect.addEventListener('input', this.changePeriodSelect);
  },

  addExpensesBlock() {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    cloneExpensesItem.querySelector('.expenses-title').value = '';
    cloneExpensesItem.querySelector('.expenses-amount').value = '';
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    if (document.querySelectorAll('.expenses-items').length === 3) {
      expensesPlus.style.display = 'none';
    }
  },

  addIncomeBlock() {
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    cloneIncomeItem.querySelector('.income-title').value = '';
    cloneIncomeItem.querySelector('.income-amount').value = '';
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    if (document.querySelectorAll('.income-items').length === 3) {
      incomePlus.style.display = 'none';
    }
  },

  getExpenses() {
    expensesItems.forEach((item) => {
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if (itemExpenses !== '' && cashExpenses !== '') {
        this.expenses[itemExpenses] = +cashExpenses;
      }
    });
  },

  getIncome() {
    incomeItems.forEach((item) => {
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;
      if (itemIncome !== '' && cashIncome !== '') {
        this.income[itemIncome] = +cashIncome;
        this.incomeMonth += +cashIncome;
      }
    });
  },

  getAddExpenses() {
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach((item) => {
      item = item.trim();
      if (item !== '') {
        this.addExpenses.push(item);
      }
    });
  },

  getAddIncome() {
    additionalIncomeItem.forEach((item) => {
      let itemValue = item.value.trim();
      if (itemValue !== '') {
        this.addIncome.push(itemValue);
      }
    })
  },

  //возвращает сумму обязательных расходов
  getExpensesMonth() {

    for (let key in this.expenses) {
      this.expensesMonth += this.expenses[key];
    }
  },

  //возвращает  накопления за месяц. Доход минус расходы
  getBudget() {

    if (!this.budget) {
      this.budget = 0;
    }
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = this.budgetMonth / 30;
  },

  //результат месячного накопления
  getTargetMonth() {
    return targetAmount.value / this.budgetMonth;
  },

  //функция уровень дохода
  getStatusIncome() {
    let budget = this.budget;
    if (budget > 1200) {
      console.log('У вас высокий уровень дохода');
    } else if (budget === 1200) {
      console.log('У вас почти получилось попасть в группу с высоким уровнем дохода');
    } else if (budget > 600 && budget < 1200) {
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
    if (this.deposit) {
      let n = 0;
      do {
        n = prompt('Какой годовой процент?', '10');
      } while (!isNumber(n) && n < 0);
      this.precentDeposit = +n;
      do {
        this
          .moneyDeposit = prompt('Какая сумма заложена?', 15000);
      } while (!isNumber(n) && n < 0);
      this.moneyDeposit = +n;
    }
  },

  calcPeriod() {
    return this.budgetMonth * periodSelect.value;
  },

  changePeriodSelect(event) {
    periodAmount.textContent = event.target.value;
    incomePeriodValue.value = appData.calcPeriod();
  },

  blockStart() {
    start.disabled = !salaryAmount.value.trim();
  }
};

appData.blockStart();
start.addEventListener('click', appData.start.bind(appData));
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
salaryAmount.addEventListener('input', appData.blockStart)