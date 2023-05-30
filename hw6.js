// 1
const mas = [1, 5, 4, 10, 0, 3];
for (let item of mas) {
    console.log(item);
    if (item === 10) {
        break;
    }
}

// 2
// используем массив из первого примера
for (let item of mas){
    if (item === 4){
        console.log(mas.indexOf(4));
        break;
    }
}
