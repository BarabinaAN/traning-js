'use strict';


//string
let str = 'урок-3-был слишком легким',
    reg_1 = /-/g,
    reg_2 = /им/gi;

let arr = [20, 33, 1, 'Человек', 2, 3];

let result = [];

str = str[0].toUpperCase() + str.slice(1);
result.push(str);

str = str.replace(reg_1, ' ');
result.push(str);

str = str.slice(-6).replace(reg_2, 'о');
result.push(str);

document.write('Результат строкового преобразования: ' + '<br>' + '<br>');

for (let i = 0; i < result.length; i++){
    document.write(result[i] + '<br>');
}


// arroy
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    if ( typeof(arr[i]) === 'number' ) {
        sum += arr[i]**3;
    }
}

let sq = Math.sqrt(sum);
document.write('<br>' + 'Квадратный корень из суммы кубов его элементов: ' + '<br>' + sq + '<br>');


//prompt
let user = prompt('Введите текст', '');

function changeUrerInput(userInput){

    while ( !isNaN(userInput) || userInput == null || userInput == '' ) {
        userInput = prompt('Вы написали что-то не то, попробуйте еще раз :)', '');
    }

    userInput = userInput.trim();

    if (userInput.length > 50) {
        userInput = userInput.slice(0, 47) + '...';
        document.write('<br>' + 'Пользователь ввел больше 50 символов: ' + '<br>' + userInput + '<br>');
    } else {
        document.write('<br>' + 'Пользователь ввел: ' + '<br>' + userInput + '<br>');
    }
}
changeUrerInput(user);








