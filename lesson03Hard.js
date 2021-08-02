let lang = 'en';

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


/*
//решение через многомерный массив
let arrLang = [
  {ru: 'ru' ['Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'] },
  {en: 'en' ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'] }
];
console.log(arrLang[lang]);
*/