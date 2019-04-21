'use strict';

let week = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
];

for ( let i = 0; i < week.length; i++ ) {
    if (i > 4){
        document.write('<b>'+ week[i] + '</b>' + '</br>'); 
    } else if (i == 1){
        document.write('<i>' + week[i] + '</i>' + '</br>');
    } else {
        document.write(week[i] + '</br>');
    }
}

let arr = [
    456,
    7864,
    2348,
    3649,
    7913456,
    45087,
    3059
];

for ( let i = 0; i < arr.length; i++ ) {
        let compareValue = String(arr[i]);
        if (compareValue[0] == '3' || compareValue[0] == '7') {
          console.log( compareValue );  
        }
}
