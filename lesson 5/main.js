let date = new Date();

function getCurrentTime(time) {
    let fullDate = time.toLocaleTimeString() + ' ' + time.toLocaleDateString();
    document.write(fullDate);
}

getCurrentTime(date);

function getCurrentDay(day) {
    let days = [
        'понедельник',
        'вторник',
        'среда',
        'четверг',
        'пятница',
        'суббота',
        'воскресенье'
    ]

    for (let i = 0; i < days.length; i++) {
        if (i == day.getDay() - 1) {
            document.write('<br>' + days[i]);
            break;
        }
    }
}

getCurrentDay(date);


let input = document.querySelectorAll('input'),
    button = document.querySelector('button'),
    result = 0;

function getSeporate(start, end) {
    let def = new Date(end.value) - new Date(start.value);
    result = def/1000/60/60/24;
}

button.addEventListener('click', function(){
    getSeporate(input[0], input[1]);
    input[2].value = result;
});



