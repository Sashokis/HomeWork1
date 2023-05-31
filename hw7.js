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
