function main() {
    "use strict";

    let money,
        time;
     
    function start(){
        money = +prompt('Ваш бюджет на месяц?', '');
        time = prompt('Введите дату в формате YYYY-MM-DD', '');

        while (isNaN(money) || money == "" || money == null){
            money = +prompt('Ваш бюджет на месяц?', '');
        }
    }  
    start();

    let appData = {
        moneyDate: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true,
        chooseExppenses: function() {
            for (let i = 0; i < 2; i++){
        
                let requiredState = prompt('Введите обязательную статью расходов в этом месяце', ''),
                    howMuch = prompt('Во сколько обойдется?', '');
        
                if ( typeof(requiredState) === 'string' && requiredState != null && requiredState != '' && requiredState.length < 50 &&
                    howMuch != null && howMuch != '') {
                    appData.expenses[requiredState] = howMuch;
                } else {
                    i--;
                }
            }
        }, 
        detectDayBudget: function () {
            appData.dailyMoney = (appData.moneyDate/30)^0;
            alert('Бютжет на 1 день - ' + '' + appData.dailyMoney);
        },
        detectLevel: function() {
            if (appData.dailyMoney < 1000) {
                console.log('малый уровень дохода');  
            } else if (appData.dailyMoney > 1000 && appData.dailyMoney < 2500){
                console.log('средний уровень дохода'); 
            } else if (appData.dailyMoney > 2500){
                console.log('высокий уровень дохода'); 
            } else {
                console.log('ошибка'); 
            }
        },
        checkSaving: function() {
            if (appData.savings == true){
                let save = +prompt('Какова сумма накоплений', ''),
                    percent = +prompt('Под какой процент?', '');
    
                appData.monthIncome = (save/100/12*percent)^0;
                alert("Доход в месяц с депозита: " + appData.monthIncome);
            }
        },
        chooseOptExpenses: function() {
            for (let i = 1; i < 4; i++){
                let optional = prompt('Статья необязательных расходов?', '');
    
                if (typeof(optional) === 'string' && optional != null && optional != ''){
                    appData.optionalExpenses[i] = optional;
                } else {
                    i--;
                }
            }
        },
        chooseIncome: function() {
            let items;

            while (items == null || typeof(items) !== 'string' || items == '') {
                items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
            }
            
            if (items !== undefined){
                let anything = prompt('Может что-то еще?', '');
                
                if (anything != '') {
                    appData.income.push(anything);
                }

                appData.income = items.split(', ');        
                appData.income.sort();
                appData.income.forEach(function(item, i, arrIncome) {
                    i++;
                    alert('Способы доп. заработка: ' + i + ' - ' + item);
                });
            }
        }
    };  
    
    appData.chooseIncome();

    for (let key in appData) {
        console.log('Наша программа включает в себя данные: ' + key + ': ' + appData[key]);
    }
}
main();

// 1) Написать проверку, что пользователь может:
// ·        Ввести в дополнительных доходах (chooseIncome) только строку

// ·        Не может оставить строку пустой

// ·        Не может отменить вопрос

// 2) При помощи метода перебора массива(forEach) вывести на экран сообщение "Способы доп. заработка: " и полученные способы (внутри chooseIncome)

// ·        Товары должны начинаться с 1, а не с 0. Выполняем этот пункт в chooseIncome.

// 3) Используя цикл for in для объекта (appData) вывести в консоль сообщение "Наша программа включает в себя данные: " (вывести весь appData)

// 4) Проверить, чтобы все работало и не было ошибок в консоли

// 5) Добавить папку с уроком на свой GitHub

// 6) Ознакомиться с конструкторами:

// ·        1. learn.javascript.ru/constructor-new

// ·        2. learn.javascript.ru/classes
