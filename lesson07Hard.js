'use strict';

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for (let i = 0; i < week.length; i++) {
  let dayWeek = document.createElement('p');
  if (((i + 1) % 7) === new Date().getDay()) {
    dayWeek.innerHTML = week[i].bold();
  } else if (week[i] === 'Суббота' || week[i] === 'Воскресенье') {
    dayWeek.innerHTML = week[i].italics();
  } else {
    dayWeek.innerHTML = week[i];
  }
  document.body.appendChild(dayWeek);
}