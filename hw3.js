// ДОМАШКА 3
 
// 1
let password = 'пароль';
let check = (prompt('Введите пароль'));

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

//4
let a = '2';
let b = '3';
e = Number(b);
b = Number(a);
a = e;
alert (a+b);

//5
let monthNomber = Number(prompt('Введите номер месяца'));
switch (monthNomber) {
    case 1:
    case 2:
    case 12:
        alert('зима');
        break;

    case 3:
    case 4:
    case 5:
        alert('весна');
        break; 

    case 6:    
    case 7:   
    case 8:
        alert('лето');
        break;  
    
    case 9:
    case 10:
    case 11:
        alert('осень');
        break;

        default:
        alert('Упс! Таког месяца нет')
        break;
}

//7
number = (Number(prompt('Пожалусйта, введите любое число')));
(number % 2 == 0) ? (alert('Число является четным')) : (alert('Число не является четным'));

//8
let clientOS = 0;
(clientOS == 0) ? (alert('Установите версию приложения для iOS по ссылке')) : 
(alert('Установите версию приложения для Android по ссылке'));

//9
let clientDeviceYear = 2015;
let modelPhone = 'iOS';
// let modelPhone = 'Android';

if (modelPhone == 'iOS') {
    if (clientDeviceYear >= 2015) {
        alert('Установите приложение для iOS по ссылке');
    } else {
        alert('Установите облегченную версию приложения для iOS по ссылке');}
} else {
    if (clientDeviceYear >= 2015) {
        alert('Установите приложение для Android по ссылке');
    } else {
        alert('Установите облегченную версию приложения для Android по ссылке');}
}
