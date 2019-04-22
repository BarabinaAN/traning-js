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
        savings: true   
    };   
    
    function chooseOptExpenses() {
        for (let i = 1; i < 4; i++){
            let optional = prompt('Статья необязательных расходов?', '');

            if (typeof(optional) === 'string' && optional != null && optional != ''){
                appData.optionalExpenses[i] = optional;
            } else {
                i--;
            }
        }
    }


    function chooseExppenses(){
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
    }
    chooseExppenses();

    function detectDayBudget() {
        appData.dailyMoney = (appData.moneyDate/30)^0;
        alert('Бютжет на 1 день - ' + '' + appData.dailyMoney);
    }
    detectDayBudget();
    
    function detectLevel() {
        if (appData.dailyMoney < 1000) {
            console.log('малый уровень дохода');  
        } else if (appData.dailyMoney > 1000 && appData.dailyMoney < 2500){
            console.log('средний уровень дохода'); 
        } else if (appData.dailyMoney > 2500){
            console.log('высокий уровень дохода'); 
        } else {
            console.log('ошибка'); 
        }
    }
    detectLevel();



    function checkSaving(){
        if (appData.savings == true){
            let save = +prompt('Какова сумма накоплений', ''),
                percent = +prompt('Под какой процент?', '');

            appData.monthIncome = (save/100/12*percent)^0;
            alert("Доход в месяц с депозита: " + appData.monthIncome);
        }
    }
    checkSaving();
}
main();
