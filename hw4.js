// //1
// for (i = 1; i < 3; i++){
//     console.log('Привет!');
// }

// //2
// for (i = 1; i <= 5; i++){
//     console.log(i);
// }

// //3
// for (i = 7; i < 23; i++){
//     console.log(i);
// }

// //4
// const obj ={
//     'Коля': 200,
//     'Вася': 300, 
//     'Петя': 400
// };

// for (let name in obj) {
//     alert(`${name} - зарплата ${obj[name]} долларов.`);
// }

// //5
// let n = 1000;
// let num = 0;
// while (n >= 50) {
//    n = n/2;
//    num++;
// }
// console.log('Количсево итераций равно ' + num);

//6
let friday = 5;
let day = friday;
while(day <= 31) {
    console.log("Сегодня пятница, " + day + "-е число. Необходимо подготовить отчет.");
    day += 7;
}