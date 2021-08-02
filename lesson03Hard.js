let lang = 'ru';

//решение через if
if (lang === 'ru') {
  console.log('a) Дни недели: ', 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
} else if (lang === 'en') {
  console.log('a) Days of the week: ', 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
} else {
  console.log('Ошибка');
}


//решение через switch-case
switch (lang) {
  case 'ru':
    console.log('b) Дни недели: ', 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
    break;
  case 'en':
    console.log('b) Days of the week: ', 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
    break;
  default:
    console.log('Ошибка');
    break;
} 

//решение через многомерный массив
let arrLang = {
  ru: [ 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'],
  en: [ 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'] 
};

console.log(arrLang[lang]);

//вариант 2
let arrLang1 = [
  [ 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'],
  ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'] 
];

console.log((lang === 'ru') ? arrLang1[0] 
  : (lang === 'en') ? arrLang1[1] 
  : 'ошибка');

let namePerson = '';
  console.log((namePerson === 'Артем') ? 'директор'
    : (namePerson === 'Максим') ? 'преподаватель'
    : 'студент'
);