// 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 
 console.log(
    people.sort(function(a,b)
        {
            if (a.age >= b.age){
                return 1;
            }
            if (a.age < b.age){
                return -1;
            }            
        }
        )
    );


// 2
function isPositive(number) {
    if (number >= 0) {
        return true;
    } 
}
function isMale(namePerson) {
    if (namePerson.gender === 'male') {
        return true;
    } 
}
function filter(arr, ruleFunction) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i]) === true) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(filter([3, -4, 1, 9], isPositive)); 

const people2 = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];

console.log(filter(people2, isMale)); 

// 3
let timerId = setInterval(() => console.log(new Date()), 3000);
setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло'); }, 30*1000);

// 4
function delayForSecond(callback) {
    setTimeout(callback, 1000*1);
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})

//5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }
    }, 1000)
}
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => {
    sayHi('Глеб');
  });