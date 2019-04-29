let buttonStart = document.getElementById('start'),

    budget = document.getElementsByClassName('budget-value')[0],
    dayBudget = document.getElementsByClassName('daybudget-value')[0],
    level = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesItem = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavings = document.getElementsByClassName('monthsavings-value')[0],
    yearSavings = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item');

    buttonExpenses = document.getElementsByTagName('button')[0], 
    buttonOptional = document.getElementsByTagName('button')[1], 
    buttonCount = document.getElementsByTagName('button')[2], 

    inputOptional = document.querySelectorAll('.optionalexpenses-item'),

    chooseIncome = document.querySelector('#income'),
    savingsCheckbox = document.querySelector('#savings'),
    savingsSum = document.querySelector('#sum'),
    savingsPercent = document.querySelector('#percent'),

    dateYear = document.querySelector('.year-value'),
    dateMonth = document.querySelector('.month-value'),
    dateDay = document.querySelector('.day-value');


    let money,
        time,
        sum = 0;

    buttonExpenses.setAttribute('disabled', 'disabled');   
    buttonOptional.setAttribute('disabled', 'disabled');   
    buttonCount.setAttribute('disabled', 'disabled');   

    
    function filledInput(item, btn) {
        for (let i = 0; i < item.length; i++) { 
            item[i].addEventListener('input', function() {
                if (this.value != '') {
                    btn.removeAttribute('disabled'); 
                } 
                else {
                    btn.setAttribute('disabled', 'disabled');   
                } 
            }); 
        }
    };

    buttonStart.addEventListener('click', function() {
        time = prompt('Введите дату в формате YYYY-MM-DD', '');
        money = +prompt('Ваш бюджет на месяц?', '');

        while (isNaN(money) || money == "" || money == null){
            money = +prompt('Ваш бюджет на месяц?', '');
        }

        appData.moneyDate = money;
        appData.timeData = time;
        budget.textContent = money.toFixed();

        dateYear.value = new Date(Date.parse(time)).getFullYear();
        dateMonth.value = new Date(Date.parse(time)).getMonth() + 1;
        dateDay.value = new Date(Date.parse(time)).getDate();

        buttonCount.removeAttribute('disabled'); 
        
        filledInput(expensesItem, buttonExpenses);
        filledInput(inputOptional, buttonOptional);
    });
    
    buttonExpenses.addEventListener('click', function() {

        for (let i = 0; i < expensesItem.length; i++){
            let requiredState = expensesItem[i].value,
                howMuch = expensesItem[++i].value;
    
            if ( typeof(requiredState) === 'string' && requiredState != null && requiredState != '' && requiredState.length < 50 &&
                howMuch != null && howMuch != '') {
                appData.expenses[requiredState] = howMuch;
                sum += +howMuch;
                
            } else {
                i--;
                expensesValue.textContent = 'Заполните оставшиеся поля';
            }    
        }
        expensesValue.textContent = sum;
    });

    buttonOptional.addEventListener('click', function() {
        for (let i = 0; i < inputOptional.length; i++){
            let optional = inputOptional[i].value;
            appData.optionalExpenses[i] = optional;
            optionalExpensesItem.textContent += appData.optionalExpenses[i] + ' ';
        }
    });

    buttonCount.addEventListener('click', function() {
        if (appData.moneyDate != undefined) {
            appData.dailyMoney = ( (appData.moneyDate-sum)/30 )^0;
            dayBudget.textContent = 'Бютжет на 1 день - ' + '' + appData.dailyMoney;
    
            if (appData.dailyMoney < 1000) {
                level.textContent = 'малый уровень дохода';  
            } else if (appData.dailyMoney > 1000 && appData.dailyMoney < 2500){
                level.textContent = 'средний уровень дохода'; 
            } else if (appData.dailyMoney > 2500){
                level.textContent = 'высокий уровень дохода'; 
            } else {
                level.textContent = 'Произошла ошибка'; 
            }
        } else {
            dayBudget.textContent = 'Произошла ошибка';
        }
    });

    chooseIncome.addEventListener('input', function() {
        let items = chooseIncome.value;       
        appData.income = items.split(', ');        
        incomeValue.textContent = appData.income;
    });

    savingsCheckbox.addEventListener('click', function() {
        appData.savings = !appData.savings;
    });

    savingsSum.addEventListener('input', function() {

        if (appData.savings == true && savingsPercent != undefined){
            let save = +savingsSum.value,
                percent = +savingsPercent.value;
    
            appData.monthIncome = (save/100/12*percent)^0;
            appData.yearIncome = (save/100*percent)^0;
    
            yearSavings.textContent = appData.yearIncome;           
            monthSavings.textContent = appData.monthIncome;      
        } 
    });

    savingsPercent.addEventListener('input', function() {
        if (appData.savings == true && savingsSum != undefined){
            let save = +savingsSum.value,
                percent = +savingsPercent.value;
    
            appData.monthIncome = (save/100/12*percent)^0;
            appData.yearIncome = (save/100*percent)^0;
    
            yearSavings.textContent = appData.yearIncome;           
            monthSavings.textContent = appData.monthIncome;    
        } 
    });

    let appData = {
        moneyDate: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };  


