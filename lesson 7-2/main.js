'use strict';

let timeBlock = document.querySelector('.time'),
    timer = setInterval(getFullTime, 1000),
    date = new Date();

    timeBlock.textContent = date.toLocaleTimeString();

function getFullTime() {
    date = new Date();
    timeBlock.textContent = date.toLocaleTimeString();
}







