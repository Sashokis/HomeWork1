// // 1
// const mas = [1, 5, 4, 10, 0, 3];
// for (let item of mas) {
//     console.log(item);
//     if (item === 10) {
//         break;
//     }
// }

// // 2
// // используем массив из первого примера
// for (let item of mas){
//     if (item === 4){
//         console.log(mas.indexOf(4));
//         break;
//     }
// }
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
>>>>>>> Stashed changes

// // 3
// let mas3 = [1, 3, 5, 10, 20];
// mas3 = mas3.join(' ');
// console.log(mas3);

<<<<<<< Updated upstream
=======
// // 4 
// let masBig = [
//     [1, 1, 1],
//     [1, 1, 1],
//     [1, 1, 1],
// ]

// for (let i of masBig){
//     for (let j of masBig) {
//         console.log(j);
//     }
//     break;
// }

// // 5
// let mas5 = [1, 1, 1];
// for (let i = 0; i <= 2; i++){
//     mas5.push(2);
// }
// console.log(mas5);


// //6
// let mas6 = [9, 8, 7, 'a', 6, 5];
// mas6.sort();
// mas6.pop();
// console.log(mas6);

 //7
const mas7 = [9, 8, 7, 6, 5];

let num = Number(prompt('Введите число от 1 до 10.'));
let search = mas7.includes(num);   

if (search === true){
    alert('Ваше число равно числу в массиве');
} else {
    alert('Вашего числа нет в массиве');
} 

// // 8
// let mas8 = 'abcdef';
// mas8 = mas8.split('');
// mas8.reverse();
// console.log(mas8);

// // 9 
// const masBig = [
//     [1, 2, 3],
//     [4, 5, 6],
// ]

// let arr = masBig.flat();
// console.log(arr);

// // 10
// const arr = [2, 5, 1, 10, 8];
// for (let i = 0; i <= arr.length; i++) {
//     let sum = 0 ;
//     if (arr[i+1] > 0){
//         sum = arr[i] + arr[i+1];
//     } else {
//         sum = arr[i];
//     }
//     console.log(sum);
// }

// // 11
// const mas8 = [1, 2, 3, 4, 5];
// function degree(arr) {
//     let newArr = [];
//     for (let index = 0; index < arr.length; index++) {
//         // newArr[index] = arr[index] ** 2;
//         newArr.push(arr[index] ** 2);
//     }
//     console.log(newArr);
// }

// degree(mas8);

// // 12
// arrWords = ['слово', '', 'слог', 'длинное предложение', 'буква'];
// function getLength (arr){
//     let lengthWords = [];
//     for (let index = 0; index < arr.length; index++) {
//         lengthWords.push(arr[index].length);
//     }
//     console.log(lengthWords);
// }

// getLength(arrWords);

// // 13
// function filterPositive(array) {
//     let negativeValue = [];
//     for (let index = 0; index < array.length; index++) {
//         if (array[index] < 0){
//             negativeValue.push(array[index])
//         }        
//     }    
//     console.log(negativeValue);
// }
  
//   filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
//   filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2]

=======

// // 3
// let mas3 = [1, 3, 5, 10, 20];
// mas3 = mas3.join(' ');
// console.log(mas3);

>>>>>>> Stashed changes
// 4 
let masBig = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
<<<<<<< Updated upstream
]
=======
]
>>>>>>> 01120842016ee591acf8772c04246fa2e16bfc60
>>>>>>> Stashed changes
