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
        alert('зима');
        break;
    case 2:
        alert('зима');
        break;
    case 3:
        alert('весна');
        break;    
    case 4:
        alert('весна');
        break;
    case 5:
        alert('весна');
        break; 
    case 6:
        alert('лето');
        break;      
    case 7:
        alert('лето');
        break;    
    case 8:
        alert('лето');
        break;  
    case 9:
        alert('осень');
        break;
    case 10:
        alert('осень');
        break;
    case 11:
        alert('осень');
        break;
    case 12:
        alert('зима');
        break;              
    default:
        alert('Упс! Таког месяца нет')
        break;
}

//7
number = (Number(prompt('Пожалусйта, введите любое число')));
(number % 2 == 0) ? (alert('Число является четным')) : (alert('Число не является четным'));