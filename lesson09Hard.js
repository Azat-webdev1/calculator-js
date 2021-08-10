'use strict';

// Получаем день недели словами
let getWeekDay = new Date().toLocaleString('ru', {
  weekday: 'long',
});

// Получаем месяц словами
let getMonthDay = new Date().toLocaleString('ru', {
  month: 'long',
});

// Функция правильно склоняет час в зависимости от того какой сейчас час
const getCorrectHour = (hour) => {
  if ((hour >= 2 && hour <= 4) || (hour >= 22 && hour <= 24)) {
      return 'часа';
  } else if (hour === 1 || hour === 21) {
      return 'час';
  } else if (hour >= 5 && hour <= 20) {
      return 'часов';
  }
};

// Вывод
document.write(``);
document.write(``);