'use strict';

// урок №3
let money = +prompt('Ваш месячный доход?', 60000);

function numberHandler(text) {
  let value = +prompt(text);

  if (null || value === 0) {
    confirm('Введите значение');
    return numberHandler();
  } else if (isNaN(parseFloat(value))) {
    confirm('Пожалуйста введите только цифры');
    return numberHandler();
  } else {
    return value;
  }
}

numberHandler(money);

console.log('type money: ', typeof money);

const income = "фриланс";
console.log('type income: ', typeof income);

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Коммуналка,Еда,Интернет');
console.log(addExpenses.length);

let deposit = confirm('Есть ли у вас депозит в банке?');
console.log('type deposit: ', typeof deposit);

let mission = 500000;

let period = 12;

console.log(`
  Период равен ${period} месяцев и
  Цель заработать ${mission} рублей
`);

console.log(addExpenses.toLowerCase().split(','));

let expenses1 = prompt('Введите обязательную статью расходов?', 'продукты');
let amount1 = +prompt('Во сколько это обойдется?', 12000);
  
numberHandler(money);

let expenses2 = prompt('Введите обязательную статью расходов?', 'транспорт');
let amount2 = +prompt('Во сколько это обойдется?', 2500);
  
numberHandler(money);

//бюджет за месяц
let budgetMonth = +money - (amount1 + amount2);

if (budgetMonth === 0) {
  console.log('Ошибка, сделайте перерасчет');
} else {
  console.log('Бюджет на месяц: ', budgetMonth);
}

let targetMonth = Math.ceil(isFinite( mission / budgetMonth));

if (targetMonth === false) {
  console.log('Ошибка, цель не достигнута');
} else {
  console.log(`Цель будет достигнута за ${targetMonth} месяцев(-а)`);
}

//бюджет за день
let budgetDay =  Math.floor(money / 30);

console.log('Бюджет на день: ', budgetDay);

//условие 
if (budgetDay > 1200) {
  console.log('У вас высокий уровень дохода');
} else if (budgetDay === 1200) {
  console.log('У вас почти получилось попасть в группу с высоким уровнем дохода');
} else if (budgetDay > 600 && budgetDay < 1200) {
  console.log('У вас средний уровень дохода');
} else if (budgetDay === 600) {
  console.log('У вас почти средний уровень дохода, но немного не хватает...');
} else if (budgetDay < 600 && budgetDay > 0) {
  console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay < 0) {
  console.log('Что то пошло не так');
} else if (isNaN(budgetDay)) {
  console.log('Где-то закралась ошибка...');
}
