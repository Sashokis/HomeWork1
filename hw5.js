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