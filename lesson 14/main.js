$(function() { 
    let btnTour = $('.main_btna'),
        btn = $('.main_btn'),
        btnSheldure = $('li a[href="#sheldure"]'),
        overlay = $('.overlay'),
        modal = $('.modal'),
        btnClose = $('.close');

    btnTour.on('click', function(){
        showOverlay();
    });

    btn.on('click', function(){
        showOverlay();
    });

    btnSheldure.on('click', function(){
        showOverlay();
    });

    btnClose.on('click', function(){
        hideOverlay();
    });

    function showOverlay() {
        overlay.animate( {opacity: "show",}, 2000 );
        modal.animate( {height: "show"}, 1500 );
    }
    
    function hideOverlay() {
        overlay.animate( {opacity: "hide",}, 2000 );
        modal.animate( {height: "hide"}, 1500 );
    }
});

// 1) Написать анимацию появления модального окна через animate, используя не менее 2х параметров

// 2) Реализовать асинхронную отправку формы, средствами JQuery

// ·        PHP файл можно взять из лэндинга

// 3) Проверить, чтобы все работало и не было ошибок в консоли

// 4) Добавить папку с уроком на GitHub