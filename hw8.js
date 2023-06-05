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

const people = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale)); 