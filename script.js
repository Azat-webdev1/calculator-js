const money = 60000;
const income = "фриланс";
const addExpenses = "Коммуналка, Еда, Интернет";
const deposit = true;
const mission = 500000;
const period = 12;

console.log(typeof money);

console.log(typeof income);

console.log(typeof deposit);

console.log(addExpenses.length);

console.log(`
  Период равен ${period} месяцев и
  Цель заработать ${mission} рублей
`);

console.log(addExpenses.toLowerCase().split(', '));

const budgetDay = money / 30;

console.log(budgetDay);