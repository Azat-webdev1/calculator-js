'use strict';

// урок №13
let start = document.getElementById('start');
let cancel = document.getElementById('cancel');
let btnPlus = document.getElementsByTagName('button');
let incomePlus = btnPlus[0];
let expensesPlus = btnPlus[1];
let depositCheck = document.querySelector('#deposit-check');
let additionalIncomeItem = document.querySelectorAll('.additional_income-item');
let budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
let budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
let expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
let additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
let additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
let incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
let targetMonthValue = document.getElementsByClassName('target_month-value')[0];
let salaryAmount = document.querySelector('.salary-amount');
let incomeItems = document.querySelectorAll('.income-items');
let expensesItems = document.querySelectorAll('.expenses-items');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let depositAmount = document.querySelector('.deposit-amount');
let depositPercent = document.querySelector('.deposit-percent');
let targetAmount = document.querySelector('.target-amount');
let periodSelect = document.querySelector('.period-select');
let inputTypeText = document.querySelectorAll('input[type=text]');
let periodAmount = document.querySelector('.period-amount');


let isNumber = (n) => {
  return !isNaN(parseFloat(n) && isFinite(n));
};

let isString = (str, comma = false) => {
  const pattern = comma ? /^[, а-яА-ЯёЁa-zA-Z]+$/ : /^[ а-яА-ЯёЁa-zA-Z]+$/;
  return pattern.test(str);
};

const AppData = function () {
  
  this.income = {};
  this.incomeMonth = 0;
  this.addIncome = [];
  this.expenses = {};
  this.addExpenses = [];
  this.deposit = false;
  this.percentDeposi = 0;
  this.moneyDeposit = 0;
  this.budget = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.expensesMonth = 0;
};

//AppData.prototype
AppData.prototype.start = function() {

  if(salaryAmount.value === ''){
    start.setAttribute('disabled', 'true');
    return;
  }
  let dataInputTypeText = document.querySelectorAll('.data input[type = text]');
  dataInputTypeText.forEach((item) => {
    item.setAttribute('disabled', 'true');
  });

  expensesPlus.setAttribute('disabled', 'true');
  incomePlus.setAttribute('disabled', 'true');
  start.style.display = 'none';
  cancel.style.display = 'block';

  this.budget = +salaryAmount.value;

  this.getExpenses();
  this.getIncome();
  this.getExpensesMonth();
  this.getAddExpenses();
  this.getAddIncome();
  this.getBudget();
  //this.getTargetMonth();
  //this.getStatusIncome();

  this.showResult();

};

AppData.prototype.showResult = function () {
  let _this = this;
  budgetMonthValue.value = this.budgetMonth;
  budgetDayValue.value = Math.floor(this.budgetDay);
  expensesMonthValue.value = this.expensesMonth;
  additionalExpensesValue.value = this.addExpenses.join(', ');
  additionalIncomeValue.value = this.addIncome.join(', ');
  targetMonthValue.value = Math.ceil(this.getTargetMonth());
  incomePeriodValue.value = this.calcPeriod();
  periodSelect.addEventListener('input', () => {
    incomePeriodValue.value = _this.calcPeriod();
  });
};

AppData.prototype.addExpensesBlock = function() {
  let cloneExpensesItem = expensesItems[0].cloneNode(true);
  cloneExpensesItem.querySelector('.expenses-title').value = '';
  cloneExpensesItem.querySelector('.expenses-amount').value = '';
  expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
  expensesItems = document.querySelectorAll('.expenses-items');
  if (expensesItems.length === 3) {
    expensesPlus.style.display = 'none';
  }
};

AppData.prototype.addIncomeBlock = function() {
  let cloneIncomeItem = incomeItems[0].cloneNode(true);
  cloneIncomeItem.querySelector('.income-title').value = '';
  cloneIncomeItem.querySelector('.income-amount').value = '';
  incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
  incomeItems = document.querySelectorAll('.income-items');
  if (incomeItems.length === 3) {
    incomePlus.style.display = 'none';
  }
};

AppData.prototype.getExpenses = function () {
  let _this = this;
  expensesItems.forEach((item) => {
    let itemExpenses = item.querySelector('.expenses-title').value;
    let cashExpenses = item.querySelector('.expenses-amount').value;
    if (itemExpenses !== '' && cashExpenses !== '') {
      _this.expenses[itemExpenses] = +cashExpenses;
    }
  });
};

AppData.prototype.getIncome = function() {
  let _this = this;
  incomeItems.forEach((item) => {
    let itemIncome = item.querySelector('.income-title').value;
    let cashIncome = item.querySelector('.income-amount').value;
    if (itemIncome !== '' && cashIncome !== '') {
      _this.income[itemIncome] = +cashIncome;
      _this.incomeMonth += +cashIncome;
    }
  });

  for (let key in this.income) {
    this.incomeMonth += +this.income[key];

  }
};

AppData.prototype.getAddExpenses = function() {
  let addExpenses = additionalExpensesItem.value.split(',');
  let _this = this;
  addExpenses.forEach((item) => {
    item = item.trim();
    if (item !== '') {
      _this.addExpenses.push(item);
    }
  });
};

AppData.prototype.getAddIncome = function () {
  let _this = this;
  additionalIncomeItem.forEach((item) => {
    let itemValue = item.value.trim();
    if (itemValue !== '') {
      _this.addIncome.push(itemValue);
    }
  })
};

//возвращает сумму обязательных расходов
AppData.prototype.getExpensesMonth = function() {

  for (let key in this.expenses) {
    this.expensesMonth += +this.expenses[key];
  }
};

//возвращает  накопления за месяц. Доход минус расходы
AppData.prototype.getBudget = function() {
  
  this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
  this.budgetDay = this.budgetMonth / 30;
};

//результат месячного накопления
AppData.prototype.getTargetMonth = function() {
  return targetAmount.value / this.budgetMonth;
};

//функция уровень дохода
AppData.prototype.getStatusIncome = function() {
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
};

AppData.prototype.getInfoDeposit = function() {
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
};

AppData.prototype.calcPeriod = function() {
  return this.budgetMonth * periodSelect.value;
};

AppData.prototype.blockStart = function() {
  start.disabled = !salaryAmount.value.trim();
};

AppData.prototype.reset = function() {
  
  let resultInputAll = document.querySelectorAll('.result input[type = text]'),
      dataInputTypeText = document.querySelectorAll('.data input[type = text]');

  dataInputTypeText.forEach((elem) => {
    elem.value = '';
    elem.removeAttribute('disabled');
    periodSelect.value = '0';
    periodAmount.innerHTML = periodSelect.value;
  });

  resultInputAll.forEach((elem) => {
      elem.value = '';
  });

  for (let i = 1; i < incomeItems.length; i++) {
    incomeItems[i].parentNode.removeChild(incomeItems[i]);
    expensesPlus.style.display = 'block';
  }

  for (let i = 1; i < expensesItems.length; i++) {
    expensesItems[i].parentNode.removeChild(expensesItems[i]);
    incomePlus.style.display = 'block';
  }

  this.income = {};
  this.expenses = {};
  this.addIncome = [];
  this.butget = 0;
  this.incomeMonth = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.expensesMonth = 0;
  this.addExpenses = [];
  this.deposit = false;

  cancel.style.display = 'none';
  start.style.display = 'block';
  incomePlus.removeAttribute('disabled');
  expensesPlus.removeAttribute('disabled');
  depositCheck.checked = false;
};

const appData = new AppData();
console.log(appData);

appData.blockStart();
start.addEventListener('click', appData.start.bind(appData));
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
salaryAmount.addEventListener('input', appData.blockStart);
cancel.addEventListener('click', appData.reset.bind(appData));
periodSelect.addEventListener('input', () => { 
  periodAmount.innerText = periodSelect.value;
});
