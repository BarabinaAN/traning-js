function timer() {
    let deadline = '2019-05-30';

    function getTimeDifference(endtime){
        let deff = Date.parse(endtime) - Date.parse(new Date()),
            hour = (deff/1000/60/60) % 60 ^ 0,
            min = (deff/1000/60) % 60 ^ 0,
            sec = (deff/1000) % 60 ^ 0;
        return {
            deff,
            hour,
            min,
            sec
        }    
    }; 

    function showTimer(id, endtime) {
        let wrap = document.getElementById(id),
            h = wrap.querySelector('.hours'),
            m = wrap.querySelector('.minutes'),
            s = wrap.querySelector('.seconds'),
            timer = setInterval(setTime, 1000);

        function setTime() {
            let deffValue = getTimeDifference(endtime);

            for (let key in deffValue) {
                if (deffValue[key] < 10 && deffValue[key] > 0) {
                    deffValue[key] = '0' + deffValue[key];
                } 
            }

            h.textContent = deffValue.hour;
            m.textContent = deffValue.min;
            s.textContent = deffValue.sec;

            if (deffValue.deff <= 0) {
                clearInterval(timer);
                h.textContent = '00';
                m.textContent = '00';
                s.textContent = '00';
            }
        }

    };

    showTimer('timer', deadline);
}

module.exports = timer;