'use strict';

const func = function () {
  let arg = prompt('Введите строку');
  if (arg !== '') {
    alert('Ошибка, это не строка');
  } else {
    arg.trim();
  }
  
  if (arg.length > 30) {
    arg = arg.substr(0, 30) + '...';
  }
  return arg;
}

//console.log('1 foo(): ', func(5));
//console.log('2 foo(): ', func('    Строка менее 30 символов     '));
console.log('3 foo(): ', func('    Строка более 30 символов - ну очень при очень длинная строчка получилась!'));