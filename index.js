'use strict';

const btnStart = document.getElementById('start');
const btnPlusIncome = document.getElementsByTagName('button')[0];
const btnPlusExpenses = document.getElementsByTagName('button')[1];
const checkboxDepositCheck = document.querySelector('#deposit-check');
const additionalIncomeItem = document.querySelectorAll('.additional_income-item');

const budgetMonth = document.getElementsByClassName('budget_month-value');
const budgetDay = document.getElementsByClassName('budget_day-value');
const expensesMonth = document.getElementsByClassName('expenses_month-value');
const additionalIncome = document.getElementsByClassName('additional_income-value');
const additionalExpenses = document.getElementsByClassName('additional_expenses-value');
const incomePeriod = document.getElementsByClassName('income_period-value');
const targetMonth = document.getElementsByClassName('target_month-value');

const salaryAmount = document.querySelector('.salary-amount');
const incomeTitle = document.querySelector('.income-title');
const incomeAmount = document.querySelector('.income-amount');
const expensesTitle = document.querySelector('.expenses-title');
const expensesAmount = document.querySelector('.expenses-amount');
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const depositAmount = document.querySelector('.deposit-amount');
const depositPercent = document.querySelector('.deposit-percent');
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');
