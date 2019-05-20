/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0,
        reg = /\D/g,
        optionIndex = 1;

    totalValue.textContent = 0;

    function updateTotal() {
        optionIndex = place.options[place.selectedIndex].value;
        total = (daysSum * personsSum)*4500*optionIndex;
        if (restDays.value == '') {
            total = 0;
        }
        if (persons.value == '') {
            total = 0;
        }
        if (total == 0) {
            totalValue.textContent = 0;
        } else {
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
            let a = total,
                b = this.options[this.selectedIndex].value / optionIndex;

            total = a * b;
            totalValue.textContent = total.toFixed();
            optionIndex = this.options[this.selectedIndex].value;
        }
    }); 
}

module.exports = calc;

/***/ }),

/***/ "./src/js/parts/popap.js":
/*!*******************************!*\
  !*** ./src/js/parts/popap.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function popap() {
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
}

module.exports = popap;

/***/ }),

/***/ "./src/js/parts/scroll.js":
/*!********************************!*\
  !*** ./src/js/parts/scroll.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function scroll() {
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
}
module.exports = scroll;

/***/ }),

/***/ "./src/js/parts/sendForm.js":
/*!**********************************!*\
  !*** ./src/js/parts/sendForm.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function sendForm() {
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
                    request.open('POST', './server.php');
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
}

module.exports = sendForm;

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
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
}

module.exports = slider;

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
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
}

module.exports = tabs;

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function(){
    'use strict'
    let tabs = __webpack_require__(/*! ./parts/tabs.js */ "./src/js/parts/tabs.js"),
        timer = __webpack_require__(/*! ./parts/timer.js */ "./src/js/parts/timer.js"),
        scroll = __webpack_require__(/*! ./parts/scroll.js */ "./src/js/parts/scroll.js"),
        popap = __webpack_require__(/*! ./parts/popap.js */ "./src/js/parts/popap.js"),
        sendForm = __webpack_require__(/*! ./parts/sendForm.js */ "./src/js/parts/sendForm.js"),
        slider = __webpack_require__(/*! ./parts/slider.js */ "./src/js/parts/slider.js"),
        calc = __webpack_require__(/*! ./parts/calc.js */ "./src/js/parts/calc.js");

    tabs();
    timer();
    scroll();
    popap();
    sendForm();
    slider();
    calc();  
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map