window.addEventListener('DOMContentLoaded', function(){
    'use strict'
    let tabs = require('./parts/tabs.js'),
        timer = require('./parts/timer.js'),
        scroll = require('./parts/scroll.js'),
        popap = require('./parts/popap.js'),
        sendForm = require('./parts/sendForm.js'),
        slider = require('./parts/slider.js'),
        calc = require('./parts/calc.js');

    tabs();
    timer();
    scroll();
    popap();
    sendForm();
    slider();
    calc();  
});