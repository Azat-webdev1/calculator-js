'use strict';

//уро№5 сложный

let arr = ['12', '23', '32', '45', '56', '49', '77'];

arr.forEach((item) => {
  if (item.startsWith('2') || item.startsWith('4')) {
    console.log('цифры: ', parseFloat(item));
  }
});


