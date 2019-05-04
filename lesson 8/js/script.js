window.addEventListener('DOMContentLoaded', function(){
    'use strict'

    let tab = document.querySelectorAll('.info-header-tab'),
        tabContent = document.querySelectorAll('.info-tabcontent'),
        tabsWrap = document.querySelector('.info-header');
    
    function hideTabContent(selectTab) {
        for (let i = selectTab; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };

    hideTabContent(1);

    function showTabContent(selectTab) {
        if (tabContent[selectTab].classList.contains('hide')) {
            tabContent[selectTab].classList.remove('hide');
            tabContent[selectTab].classList.add('show');
        }
    };

    tabsWrap.addEventListener('click', function(event) {
        let targetTab = event.target;

        if (targetTab && targetTab.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (targetTab == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //Timer

    let deadline = '2019-05-05';

    function getTimeDifference(endtime){
        let deff = Date.parse(endtime) - Date.parse(new Date()),
            hour = (deff/1000/60/60) % 60 ^ 0,
            min = (deff/1000/60) % 60 ^ 0,
            sec = (deff/1000) % 60 ^ 0;
        return {
            deff: deff,
            hour: hour,
            min: min,
            sec: sec
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

    // scroll smooth to menu item

    let navWrapp = document.getElementsByTagName('nav')[0];

    navWrapp.addEventListener('click', function(event) {
        event.preventDefault();

        let target = event.target;

        if (target && target.hasAttribute('href')) {
            let ancore = target.getAttribute('href').replace('#', ''),
                topY = document.getElementById(ancore).offsetTop;

            window.scrollTo({
                top: topY,
                behavior: "smooth"
            });
        }
    });
});