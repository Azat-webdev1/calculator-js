'use strict';

//уро№5 сложный

//1)
const arr = ['12', '23', '32', '45', '56', '49', '77'];

arr.forEach((item) => {
  if (item.startsWith('2') || item.startsWith('4')) {
    console.log('цифры: ', parseFloat(item));
  }
});

//2)
const dividers = (el) => {
  let arr = [];
  if (el !== 1) {
      arr.push(1);
      for (let j = 2; j * j <= el; j++) {
          if (el % j === 0) {
              arr.push(j);
          }
      }
  }
  arr.push(el);
  return arr;
};

for (let i = 1; i <= 100; i++) {
  console.log(`${i}: Делители этого числа: ${dividers(i).join(', ')}`);
}