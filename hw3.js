// ДОМАШКА 3
 
// 1
let password = 'пароль';
let check = String(prompt('Введите пароль'));

if (password === check ){
    alert('Пароль введен верно');
} else{
    alert('Пароль введен неверно');
}

//2
const c = 2;
(c > 0 && c < 10) ? (console.log('Верно')) : (console.log('Неверно'));

//3 
const d = 2;
const e = 102;
(d > 100 || e > 100) ? (console.log('Верно')) : (console.log('Неверно'));