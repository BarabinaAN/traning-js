let buttonStart = document.getElementById('start'),

    budget = document.getElementsByClassName('budget-value')[0],
    daybudget = document.getElementsByClassName('daybudget-value')[0],
    level = document.getElementsByClassName('level-value')[0],
    expenses = document.getElementsByClassName('expenses-value')[0],
    optionalexpenses = document.getElementsByClassName('optionalexpenses-value')[0],
    income = document.getElementsByClassName('income-value')[0],
    monthsavings = document.getElementsByClassName('monthsavings-value')[0],
    yearsavings = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item');

    buttonExpenses = document.getElementsByTagName('button')[0], 
    buttonOptional = document.getElementsByTagName('button')[1], 
    buttonCount = document.getElementsByTagName('button')[2], 

    inputOptional = document.querySelectorAll('.optionalexpenses-item'),

    chooseIncome = document.querySelector('#income'),
    savings = document.querySelector('#savings'),
    savingsSum = document.querySelector('#sum'),
    savingsPercent = document.querySelector('#percent'),

    dateYear = document.querySelector('.year-value'),
    dateMonth = document.querySelector('.month-value'),
    dateDate = document.querySelector('.day-value');
