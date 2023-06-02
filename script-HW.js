function seasons() {
    let month = Number(prompt(`Введите любой месяц года.`));

    switch (month) {
        case 1:
        case 2:
        case 12:
            alert('Это зима!');
            break;
        case 3:
        case 4:
        case 5:
            alert('Это весна!');    
            break;
        case 6:
        case 7:
        case 8:
            alert('Это лето!');    
            break;
        case 9:
        case 10:
        case 11:
            alert('Это осень!');    
            break;    
        default :
            alert('Что-то совсем не то');
            break;
    }
}

function memorizeWords() {
    let list = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    list = list.sort(() => Math.random() - 0.5);
    alert(list);
    oneWord = prompt('Какое слово было первыйм ?');
    lastWord = prompt('Какое слово было последним ?');
    if ((oneWord.toUpperCase() === list[0].toUpperCase()) && (lastWord.toUpperCase() === list[6].toUpperCase())) {
        alert('Поздравляю! Вы угадали оба слова.');
    } else if ((oneWord.toUpperCase() === list[0].toUpperCase()) || (lastWord.toUpperCase() === list[6].toUpperCase())){
        alert('Вы были близки к победе!');
    } else{
        alert('Ой! Вы ответили не верно. Попробуйте еще раз!')
    }
}

