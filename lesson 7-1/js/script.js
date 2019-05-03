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
});

