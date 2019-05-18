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