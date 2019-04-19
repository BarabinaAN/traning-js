'use strict'

let money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', ''),
    requiredState = prompt('Введите обязательную статью расходов в этом месяце', ''),
    howMuch = prompt('Во сколько обойдется?', '');

let appData = {
    moneyDate: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false      
};   

appData.expenses[requiredState] = howMuch;

requiredState = prompt('Введите обязательную статью расходов в этом месяце', ''),
howMuch = prompt('Во сколько обойдется?', '');

appData.expenses[requiredState] = howMuch;

alert('Бютжет на 1 день - ' + '' + appData.moneyDate/30);

console.log(appData); 