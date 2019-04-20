function main() {
    "use strict";
    
    let money = +prompt('Ваш бюджет на месяц?', ''),
        time = prompt('Введите дату в формате YYYY-MM-DD', '');
    
    let appData = {
        moneyDate: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false   
    };   
    
    for (let i = 0; i < 2; i++){

        let requiredState = prompt('Введите обязательную статью расходов в этом месяце', ''),
            howMuch = prompt('Во сколько обойдется?', '');

        if ( typeof(requiredState) === 'string' && requiredState != null && requiredState != '' && requiredState.length < 50 &&
            howMuch != null && howMuch != '') {

            console.log('is worked');
            appData.expenses[requiredState] = howMuch;
        } else {
            i--;
        }
    }

    // let i = 0;

    // while (i < 2){
    //     i++;

    //     let requiredState = prompt('Введите обязательную статью расходов в этом месяце', ''),
    //         howMuch = prompt('Во сколько обойдется?', '');

    //     if ( typeof(requiredState) === 'string' && requiredState != null && requiredState != '' && requiredState.length < 50
    //          && howMuch != null && howMuch != '') {

    //         console.log('is worked');
    //         appData.expenses[requiredState] = howMuch;
    //     } else {
    //         i--;
    //     }
    // }

    // let i = 0;

    // do {
    //     i++;

    //     let requiredState = prompt('Введите обязательную статью расходов в этом месяце', ''),
    //         howMuch = prompt('Во сколько обойдется?', '');

    //     if ( typeof(requiredState) === 'string' && requiredState != null && requiredState != '' && requiredState.length < 50
    //          && howMuch != null && howMuch != '') {

    //         console.log('is worked');
    //         appData.expenses[requiredState] = howMuch;
    //     } else {
    //         i--;
    //     }
    // } while (i < 2);

    appData.dailyMoney = appData.moneyDate/30;

    alert('Бютжет на 1 день - ' + '' + appData.moneyDate/30);

    if (appData.dailyMoney < 1000) {
        console.log('малый уровень дохода');  
    } else if (appData.dailyMoney > 1000 && appData.dailyMoney < 2500){
        console.log('средний уровень дохода'); 
    } else if (appData.dailyMoney > 2500){
        console.log('высокий уровень дохода'); 
    } else {
        console.log('ошибка'); 
    }

    console.log(appData);  
}
main();
