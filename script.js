'use strict';

// урок №16 
const start = document.getElementById('start');
const cancel = document.getElementById('cancel');
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
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');
const inputTypeText = document.querySelectorAll('input[type=text]');
const periodAmount = document.querySelector('.period-amount');
const depositBank = document.querySelector('.deposit-bank');
const depositAmount = document.querySelector('.deposit-amount');
const depositPercent = document.querySelector('.deposit-percent');

let incomeItems = document.querySelectorAll('.income-items');
let expensesItems = document.querySelectorAll('.expenses-items');

const isNumber = (n) => {
  return !isNaN(parseFloat(n) && isFinite(n));
};

const isString = (str, comma = false) => {
  const pattern = comma ? /^[, а-яА-ЯёЁa-zA-Z]+$/ : /^[ а-яА-ЯёЁa-zA-Z]+$/;
  return pattern.test(str);
};

class AppData {
  constructor() {
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
  }

  start() {

    if (start.textContent === 'Рассчитать') {


      this.getExpInc()
      this.getExpensesMonth();
      this.getAddExpInc();
      this.getInfoDeposit();
      this.getBudget();
      //this.getTargetMonth();
      //this.getStatusIncome();
      this.showResult();
      this.blockage();
      start.textContent = 'Сбросить';
    } else {
      start.textContent = 'Рассчитать';
      this.reset();
    }
  }

  showResult() {
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
  }

  getExpIncBlock(e) {
    const target = e.target;
    const startStr = target.parentNode.className;
    const cloneItem = document.querySelector(`.${startStr}-items`).cloneNode(true);
    cloneItem.querySelector(`.${startStr}-title`).value = '';
    cloneItem.querySelector(`.${startStr}-amount`).value = '';
    target.parentNode.insertBefore(cloneItem, target);
    if (document.querySelectorAll(`.${startStr}-items`).length === 3) {
      target.style.display = 'none';
    }
  }

  getExpInc() {
    const count = (item) => {
      const startStr = item.className.split('-')[0];
      const itemTitle = item.querySelector(`.${startStr}-title`).value;
      const itemAmount = item.querySelector(`.${startStr}-amount`).value;
      if (itemTitle !== '' && itemAmount !== '') {
        this[startStr][itemTitle] = +itemAmount;
        this.incomeMonth += +itemAmount;
      }
    };

    incomeItems.forEach(count);
    expensesItems.forEach(count);

    for (let key in this.income) {
      this.incomeMonth += +this.income[key];
    }
  }

  getAddExpInc() {
    const elem = (item) => {
      return item.map(el => el.trim()).filter(el => el !== '');
    };

    this.addExpenses = elem(additionalExpensesItem.value.split(','));
    this.addIncome = elem([additionalIncomeItem[0].value, additionalIncomeItem[1].value]);
  }

  //возвращает сумму обязательных расходов
  getExpensesMonth() {

    for (let key in this.expenses) {
      this.expensesMonth += +this.expenses[key];
    }
  }

  //возвращает  накопления за месяц. Доход минус расходы
  getBudget() {
    const monthDeposit = this.moneyDeposit * (this.percentDeposit / 100);

    this.budget = +salaryAmount.value;
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + monthDeposit;
    this.budgetDay = this.budgetMonth / 30;
  }

  //результат месячного накопления
  getTargetMonth() {
    return targetAmount.value / this.budgetMonth;
  }

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
  }

  calcPeriod() {
    return this.budgetMonth * periodSelect.value;
  }

  blockStart() {
    start.disabled = !salaryAmount.value.trim() ||
      (depositCheck.checked && !(depositPercent.value.trim() && depositAmount.value.trim()));
  }

  blockage(disabled = true) {
    let dataInputTypeText = document.querySelectorAll('.data input[type = text]');

    dataInputTypeText.forEach(item => {
      item.disabled = disabled;
    });
    depositCheck.disabled = disabled;
    depositBank.disabled = disabled;
    incomePlus.disabled = disabled;
    expensesPlus.disabled = disabled;
  }

  reset() {

    const excessRemoval = item => {
      for (let i = item.length - 1; i > 0; i--) {
        item[0].parentNode.removeChild(item[i]);
      }
    };
    excessRemoval(document.querySelectorAll('.income-items'));
    excessRemoval(document.querySelectorAll('.expenses-items'));

    this.blockage(false);

    incomePlus.style.display = '';
    expensesPlus.style.display = '';
    depositCheck.checked = false;

    this.depositHandler();

    document.querySelectorAll('input[type=text]').forEach(item => {
      item.value = '';
    });

    periodSelect.value = periodAmount.textContent = 1;

    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.income = {};
    this.incomeMonth = 0;
    this.expenses = {};
    this.expensesMonth = 0;
    this.addIncome = [];
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;

    this.blockStart();
  }

  getInfoDeposit() {
    if (this.deposit) {
      this.percentDeposit = depositPercent.value;
      this.moneyDeposit = depositAmount.value;
    }
  }

  check(e) {
    const target = e.target;

    const changeInput = () => {
      let condition = /.+/;
      let validPervent = true;
      let textAlert;

      if (target.placeholder === 'Процент') {
        condition = /^[\d.]+$/;
        validPervent = (+target.value.trim() > 0) && (+target.value.trim() < 100);
        textAlert = ('Введите корректное значение в поле проценты! (число от 1 до 100)');
      }
      if (!condition.test(target.value.trim()) && target.value.trim() || !validPervent) {
        alert(textAlert);
        target.value.trim();
      }
      target.removeEventListener('change', changeInput);
    };
    target.addEventListener('change', changeInput);
  }

  changePercent() {
    const valueSelect = this.value;

    if (!valueSelect) {
      depositAmount.disabled = true;
    } else {
      depositAmount.disabled = false;

      if (valueSelect === 'other') {
        depositPercent.style.display = 'inline-block';
        depositPercent.value = '';
      } else {
        depositPercent.style.display = 'none';
        depositPercent.value = valueSelect;
      }
    }
  }

  depositHandler() {

    if (depositCheck.checked) {
      depositBank.style.display = 'inline-block';
      depositAmount.style.display = 'inline-block';
      this.deposit = true;
      depositBank.addEventListener('change', this.changePercent);
    } else {
      depositBank.style.display = 'none';
      depositAmount.style.display = 'none';
      depositPercent.style.display = 'none';
      depositBank.value = '';
      depositAmount.value = '';
      this.deposit = false;
      depositBank.removeEventListener('change', this.changePercent);

    }
    this.blockStart();
  }

  eventsListeners() {
    this.blockStart();
    start.addEventListener('click', this.start.bind(this));
    expensesPlus.addEventListener('click', this.getExpIncBlock);
    incomePlus.addEventListener('click', this.getExpIncBlock);
    salaryAmount.addEventListener('input', this.blockStart);
    depositAmount.addEventListener('input', this.blockStart);
    depositPercent.addEventListener('input', this.blockStart);
    document.querySelectorAll('.data input').forEach(input => {
      input.addEventListener('focus', this.check);
    });
    depositAmount.addEventListener('focus', this.check);
    depositPercent.addEventListener('focus', this.check);
    depositCheck.addEventListener('change', this.depositHandler.bind(this));
    periodSelect.addEventListener('input', function () {
      periodAmount.innerText = periodSelect.value;
    });
  }
}

const appData = new AppData();

appData.eventsListeners();