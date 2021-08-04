'use strict';

const func = (arg) => {
    if (typeof arg !== "string") {
      console.log('Передана не строка');
    }
    let res = arg.trim();
  
    if (res.length > 30) {
      res = res.substring(0, 30) + ' ...';
    }
  
    return res;
  };
  

//console.log('1 func(): ', func(5));
console.log('2 func(): ', func('    Строка менее 30 символов     '));
console.log('3 func(): ', func('    Строка более 30 символов - ну очень при очень длинная строчка получилась!'));