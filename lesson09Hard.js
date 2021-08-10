'use strict';

//урок№9 сложный 
let body = document.querySelector('body');

let clock = document.createElement('div');

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

// Функция возвращает строку вида 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'
const todayDateOne = () => {
  let currentDate = new Date(),
      currentWeekdayInWords = getWeekDay, 
      currentDay = currentDate.getDate(), 
      currentMonthInWords = getMonthDay, 
      currentYear = currentDate.getFullYear(), 
      currentHour = currentDate.getHours(), 
      currentMinutes = currentDate.getMinutes(), 
      currentSeconds = currentDate.getSeconds(); 

  return `a)  Сегодня ${currentWeekdayInWords}, ${currentDay} ${currentMonthInWords} ${currentYear} года, 
  ${currentHour} ${getCorrectHour(currentHour)} ${currentMinutes} минут ${currentSeconds} секунды `;
};

// Выводим каждую секунду актуальное время
setInterval(() => {
  body.prepend(clock);
  clock.textContent = todayDateOne();
}, 1000);


// Функция добавляет ноль перед числом которое состоит из 1 цифры
const addZero = (num) => {
  if (num >= 0 && num <= 9) {
      return '0' + num;
  } else {
      return num;
  }
};
// Создаем клон элемента
let clockTwo = clock.cloneNode(false);

// Выводим каждую секунду актуальное время
setInterval(() => {
    body.prepend(clockTwo);
    clockTwo.textContent = todayDateTwo();
}, 1000);

