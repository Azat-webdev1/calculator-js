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


// Функция добавляет ноль перед числом которое состоит из 1 цифры
const addZero = (num) => {
  if (num >= 0 && num <= 9) {
      return '0' + num;
  } else {
      return num;
  }
};

// Функция возвращает строку вида '04.02.2020 - 21:05:33'
const todayDateTwo = () => {
  let currentDate = new Date(),
      currentDay = currentDate.getDate(), 
      currentMonth = currentDate.getMonth(), 
      currentYear = currentDate.getFullYear(), 
      currentHour = currentDate.getHours(), 
      currentMinutes = currentDate.getMinutes(),
      currentSeconds = currentDate.getSeconds(); 

  return `б)${addZero(currentDay)}.${addZero(currentMonth + 1)}.${currentYear} - ${addZero(currentHour)}:${addZero(currentMinutes)}:${addZero(currentSeconds)}`;
};

// Создаем клон элемента
let clockTwo = clock.cloneNode(false);

setInterval(() => {
  body.prepend(clockTwo);
  clockTwo.textContent = todayDateTwo();
}, 1000);

setInterval(() => {
  body.prepend(clock);
  clock.textContent = todayDateOne();
}, 1000);
