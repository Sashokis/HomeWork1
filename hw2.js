// задание 1
let a = 10;
alert(a);
a = 20;
alert(a);

// задание 2
let year = 2007;
alert(`${year} год - это год выпуска первого iPhone.`); 

// задание 3
let  nameJS = 'Брендан Эйх'; 
alert(`${nameJS} является создателем языка JavaScript`);

// задание 4
const numberOne = 10;
const numberTwo = 2;
let sum = numberOne + numberTwo;
let diff = numberOne - numberTwo;
let multiply = numberOne * numberTwo;
let division = numberOne / numberTwo;
alert(`Сумма ${sum}, разность ${diff}, произведние ${multiply}, деление ${division}`);

// задание 5
const number = 2;
let result = 2**5;
alert(`Результата возведения в 5-ую степень двойки: ${result}`);

// задание 6
const a6 = 9;
const b6 = 2;
alert(`Остаток от деления: ${9%2}`);

// задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

// задание 8
let age = prompt('Сколько вам лет?');
alert(`Ваш возараст: ${age}`);

// задание 9
let user = {
    userName:'Петя',
    userAge: 20, 
    BisAdmin: true
};

user.cityOfResidence = 'Москва';
user["age"] = 22;
delete user.cityOfResidence;

let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

// задание 10
let youName = prompt (`Введите свое имя:`);
alert(`Привет, ${youName} !`);