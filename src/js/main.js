'use strict'

let num = '33721';

let arr = num.split('');

let summ = 1;

function multNumber() {
    for (var i = 0; i < arr.length; i++) {
        var item = +arr[i];
        summ = summ * item;
    }
    return summ;
};
multNumber();

console.log(summ);

summ = summ**3;
alert( String(summ).slice(0, 2) );

