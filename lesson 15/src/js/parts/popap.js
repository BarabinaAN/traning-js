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