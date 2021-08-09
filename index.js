'use strict';

let btnStart = document.getElementById('start');
console.log('btnStart: ', btnStart);

const btnPlusIncome = document.getElementsByTagName('button')[0];
console.log('btnPlusIncome: ', btnPlusIncome);

const btnPlusExpenses = document.getElementsByTagName('button')[1];
console.log('btnPlusExpenses: ', btnPlusExpenses);

const checkboxDepositCheck = document.querySelector('#deposit-check');
console.log('checkboxDepositCheck: ', checkboxDepositCheck);

const additionalIncomeItem = document.querySelectorAll('.additional_income-item');
console.log('additionalIncomeItem: ', additionalIncomeItem);

const budgetMonth = document.getElementsByClassName('budget_month-value');
console.log('budgetMonth: ', budgetMonth);

const budgetDay = document.getElementsByClassName('budget_day-value');
console.log('budgetDay: ', budgetDay);

const expensesMonth = document.getElementsByClassName('expenses_month-value');
console.log('expensesMonth: ', expensesMonth);

const additionalIncome = document.getElementsByClassName('additional_income-value');
console.log('additionalIncome: ', additionalIncome);

const additionalExpenses = document.getElementsByClassName('additional_expenses-value');
console.log('additionalExpenses: ', additionalExpenses);

const incomePeriod = document.getElementsByClassName('income_period-value');
console.log('incomePeriod: ', incomePeriod);

const targetMonth = document.getElementsByClassName('target_month-value');
console.log('targetMonth:', targetMonth);

const salaryAmount = document.querySelector('.salary-amount');
console.log('salaryAmount: ', salaryAmount);

const incomeTitle = document.querySelector('.income-title');
console.log('incomeTitle: ', incomeTitle);

const incomeAmount = document.querySelector('.income-amount');
console.log('incomeAmount: ', incomeAmount);

const expensesTitle = document.querySelector('.expenses-title');
console.log('expensesTitle: ', expensesTitle);

const expensesAmount = document.querySelector('.expenses-amount');
console.log('expensesAmount: ', expensesAmount);

const additionalExpensesItem = document.querySelector('.additional_expenses-item');
console.log('additionalExpensesItem: ', additionalExpensesItem);

const depositAmount = document.querySelector('.deposit-amount');
console.log('depositAmount: ', depositAmount);

const depositPercent = document.querySelector('.deposit-percent');
console.log('depositPercent: ', depositPercent);

const targetAmount = document.querySelector('.target-amount');
console.log('targetAmount: ', targetAmount);

const periodSelect = document.querySelector('.period-select');
console.log('periodSelect: ', periodSelect);