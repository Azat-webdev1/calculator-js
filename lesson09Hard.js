'use strict';

// Получаем день недели словами
let getWeekDay = new Date().toLocaleString('ru', {
  weekday: 'long',
});

// Получаем месяц словами
let getMonthDay = new Date().toLocaleString('ru', {
  month: 'long',
});


// Вывод
document.write(``);
document.write(``);