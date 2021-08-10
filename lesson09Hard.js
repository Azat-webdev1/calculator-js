'use strict';

let data = new Date();
let year = data.getFullYear();
let month = data.getMonth();
let day = data.getDate();
let hour = data.getHours();
let minutes = data.getMinutes();
let seconds = data.getSeconds();


// Вывод
document.write(`<strong> Сегодня ${day}-${month}-${year} года, ${hour} час(-а) ${minutes} минут(-ы) ${seconds} секунд(-ы) </strong> `);
document.write(`<p> <strong> Сегодня ${data.toLocaleString()} </strong> </p> `);