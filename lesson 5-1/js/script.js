"use strict";

let menuList = document.querySelector('.menu'),
    item = document.querySelectorAll('.menu-item'),
    lastItem = item[0].cloneNode(true),
    title = document. getElementById('title'), 
    userInput = document. getElementById('prompt'), 
    adv = document.querySelector('.adv'),
    answer = prompt('Как вы относите к подлинной технике apple?', '');

    if (answer != null && answer !== '') {
        userInput.textContent = answer;
    }
    
    menuList.insertBefore(item[2], item[1]);
    lastItem.textContent = 'Пятый элемент';
    menuList.appendChild(lastItem);
    document.body.style.backgroundImage = 'url(../img/apple_true.jpg)';
    title.textContent = 'Мы продаем только подлинную технику Apple';
    adv.remove();





// 2) Используя только файл скрипта (html руками не трогать) выполнить такие действия:

// ·        Восстановить порядок в меню, добавить пятый пункт

// ·        Заменить картинку заднего фона на другую из папки img

// ·        Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")

// ·        Удалить рекламу со страницы

// ·        Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"

// 3) Проверить, чтобы все работало и не было ошибок в консоли
