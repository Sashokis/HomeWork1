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

 // 9 
  let currentDate = new Date();
  currentDate.setDate(72);
  console.log(currentDate);

  // 10
  const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
                  "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
  let myDate = new Date();
  let hour = myDate.getHours(); 
  let minute = myDate.getMinutes(); 
  let second = myDate.getSeconds();
                  
  if (minute < 10) { 
	minute = "0" + minute; 
  }
  if (second < 10) { 
	second = "0" + second; 
  }

  let fullDate = "Сегодня: " + myDate.getDate() + " " + months[myDate.getMonth()] + 
    " " + myDate.getFullYear() + ', ' + days[myDate.getDay()] + ", текущее время: " + myDate.getHours() + ":" + minute + ":" + second ; 
  console.log(fullDate);
