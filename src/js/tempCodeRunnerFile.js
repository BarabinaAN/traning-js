'use strict';

let str = 'урок-3-был слишком легким',
    reg_1 = /-/g,
    reg_2 = /им/gi;

let arr = [20, 33, 1, 'Человек', 2, 3];

str = str[0].toUpperCase() + str.slice(1);
console.log(str);

str = str.replace(reg_1, ' ');
console.log(str);

str = str.slice(-6).replace(reg_2, 'о');
console.log(str);

let sum = 0;


for (let i = 0; i < arr.length; i++) {
    if ( typeof(arr[i]) === 'number' ) {
        sum += arr[i]**3;
    }
}
let sq = Math.sqrt(sum);
console.log(sum);
console.log(sq);

