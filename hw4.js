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

//4
const obj ={
    'Коля': 200,
    'Вася': 300, 
    'Петя': 400
};

for (let name in obj) {
    alert(`${name} - зарплата ${obj[name]} долларов.`);
}