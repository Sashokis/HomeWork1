// 1
let stringUp = 'Hello!';
stringUp = stringUp.toUpperCase();
console.log(stringUp);

// 2
arrString = ['Кошка', 'Кит', 'Комар', 'Носорог'];
nameString = 'ко'

function searchStart (arr, nameSt){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toUpperCase().includes(nameString.toUpperCase())){
            newArr.push(arr[i]);
        }            
    }
    console.log(newArr);
}

searchStart(arrString, nameString);


// 3
const number = 32.58884;
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));

//4
 const arrNumber = [52, 53, 49, 77, 21, 32];
 console.log(Math.max(...arrNumber));
 console.log(Math.min(...arrNumber));

 // 5 
 function findRandom(){
    console.log(Math.round(Math.random()*10));
 }

 findRandom();

 // 6 
 
 function getRandomArrNumbers(number){
    let arr = [];
    for (let i = 0; i < (Math.floor(number/2)); i++) {
        arr.push(Math.round(Math.random() * number ));    
    }
    console.log(arr);
 }

 getRandomArrNumbers(Number(prompt('Введите число')));

 // 7
 function getRandomNumber(oneNum, twoNum) {
    if (oneNum >= twoNum) {
        let num = oneNum;
        oneNum = twoNum;
        twoNum = num;
    }
    console.log(Math.round(Math.random() * (twoNum - oneNum)) + oneNum);    
 }

 getRandomNumber(9,2);

 // 8
 let date = new Date();
 console.log(date);