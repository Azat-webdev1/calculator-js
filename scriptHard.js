const num = 266219;

const arrNum = num.toString().split('');

let res = 1;

arrNum.forEach(elem => res *= elem);

console.log(res);