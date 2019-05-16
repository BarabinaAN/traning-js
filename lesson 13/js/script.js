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

    let deadline = '2019-05-15';

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

    // scroll smooth to menu item

    let navWrapp = document.getElementsByTagName('nav')[0];

    navWrapp.addEventListener('click', function(event) {
        event.preventDefault();

        let target = event.target;

        if (target && target.hasAttribute('href')) {
            let ancore = target.getAttribute('href').replace('#', ''),
                topY = document.getElementById(ancore).offsetTop;

            try {
                window.scrollTo({
                  behavior: 'smooth',
                  top: topY,
                })
            } catch(err) {
                if (err instanceof TypeError) {
                    window.scroll(0, topY)
                } else {
                    throw err
                }
            }
        }
    });

    // show overlay 

    let buttonOverlay = document.querySelectorAll('.description-btn'),
        buttonMore = document.querySelectorAll('.more'),
        wrapOverlay = document.querySelector('.overlay'),
        buttonClose = document.querySelector('.popup-close');
   
    function changeOverlay(btnClass) {
        for (let i = 0; i < btnClass.length; i++) {
            btnClass[i].addEventListener('click', function(){
                wrapOverlay.style.display = 'block';
            });
        }
        buttonClose.addEventListener('click', function(){
            wrapOverlay.style.display = '';
        });
    }
    
    changeOverlay(buttonOverlay);
    changeOverlay(buttonMore);

    // send form

    let message = {
        loading: 'Загрузка',
        success: 'Ваш запрос успешно отправлен!',
        error: 'Произошла ошибка'
    };

    function sendForm(selector){

        let form = document.querySelector(selector),
            input = form.getElementsByTagName('input'),
            phone = form.querySelectorAll('input[name="phone"]'),
            status = document.createElement('div');

        for (let i = 0; i < phone.length; i++) {
            phone[i].addEventListener('keypress', function(event) {
                if (event.keyCode != 43 && event.keyCode < 48 || event.keyCode > 57) {
                    event.preventDefault();
                }
            });
        }

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            form.appendChild(status);
            let formData = new FormData(form);
            
            function postDate(date) {
                return new Promise(function(resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    
                    request.addEventListener('readystatechange', function() {
                        if (request.readyState > 4) {
                            resolve();
                        } else if (request.readyState === 4 ) {
                            if (request.status == 200) {
                                resolve();
                            }
                            else {
                                reject();
                            }
                        } 
                    });

                    request.send(date);
                });
            }

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }
    
            postDate(formData)
                .then(() => status.textContent = message.loading)
                .then(() => status.textContent = message.success)
                .catch(() => status.textContent = message.error)
                .then(clearInput)
        }); 
    }

    sendForm('.main-form');
    sendForm('#form');

    //slider

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    function ShowSlide(n) {
        if (n > slides.length) {
            slideIndex = 1; 
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = '';
        dots[slideIndex - 1].classList.add('dot-active');
    }  
    ShowSlide(slideIndex); 

    function plusSlide(n) {
        ShowSlide(slideIndex += n);
    }

    function currentSlide(n) {
        ShowSlide(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlide(-1);
        currentSlide(slideIndex);
    });

    next.addEventListener('click', function() {
        plusSlide(1);
        currentSlide(slideIndex);
    });

    dotsWrap.addEventListener('click', function(event) {

        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target == dots[i-1] && event.target.classList.contains('dot')) {
                currentSlide(i);
            }
        }
    });

    //calc

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0,
        reg = /\D/g;

        totalValue.textContent = 0;

        function updateTotal() {
            total = (daysSum * personsSum)*4500;
            if (restDays.value == '') {
                total = 0;
            }
            if (persons.value == '') {
                total = 0;
            }
            if (total > 0) {
                totalValue.textContent = total;
            }
        }

        function checkCalcValue(el) {
            el.setAttribute('type', 'text');
            if (reg.test(el.value)) {
                el.value = el.value.replace(reg, '');
            }
        }    

        persons.addEventListener('input', function() {
            checkCalcValue(this);
            personsSum = +this.value;
            updateTotal(restDays);
        });

        restDays.addEventListener('input', function() {
            checkCalcValue(this);
            daysSum = +this.value;
            updateTotal(persons);
        });

        place.addEventListener('change', function() {
            if (restDays.value == '' || persons.value == '') {
                totalValue.textContent = 0;
            } else {
                let a = total;
                totalValue.textContent = a * this.options[this.selectedIndex].value;
            }
        });      
});