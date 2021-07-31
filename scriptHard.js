// Создать переменную num со значением 266219 (тип данных число)
const num = 266219;

// Вывести в консоль произведение (умножение) цифр этого числа
const arrNum = num.toString().split('');

let res = 1;

arrNum.forEach(elem => res *= elem);

console.log('2: ', res);

// Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
const degreeRes = res ** 3;

console.log('3: ', BigInt(degreeRes));

// Вывести на экран первые 2 цифры полученного числа
console.log('4: ', degreeRes.toString().substr(0,2));