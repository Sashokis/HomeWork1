// 1
let answer =0;
function compare(one, two) {
    if (one <= two) {
        return answer = one;
    } else { 
        return answer = two;
    }
}

alert(compare(6,6));

// 2
function check(number) {
    if (number % 2 == 0) {
        return `Число ${number} четное`;
    } else { 
        return `Число ${number} нечетное`
    }
}

alert(check(5));

// 3.1
function degree(num) {
    console.log(num**2);
}

degree(4);

// 3.2
function degree(num) {
    return num**2;
}

alert(degree(5));

//4
function howOld() {
    let age = prompt(`Сколько вам лет?`);
    if (age < 0) {
        alert('Вы ввели неправильное значение');
    } else if((age => 0) && (age < 13)){
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!');
    }
}

howOld();

// 5 
function checkNum() {
    let oneNum = Number(prompt('Введите первое число'));
    let twoNum = Number(prompt('Введите второе число'));

    if (typeof oneNum !== 'number' || typeof twoNum !== 'number' || isNaN(oneNum) ||  isNaN(twoNum)) {
        alert('Одно или оба значения не являются числом');
    } else {
        alert(`Произведение чисел равно ${oneNum * twoNum}`);
    }
}

checkNum();