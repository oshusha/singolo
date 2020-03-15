'use strict';

const MENU = document.getElementById('menu');
const TABS = document.getElementById('tabs_menu');
const PROJECTS = document.getElementById('projects');

//Реализуем активные пункты меню при перемещении по ним

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('navigation__link_state_active'));

    event.target.classList.add('navigation__link_state_active');
});


//Переключение слайдов бесконечной каруселькой

//Активация телефонов слайда1 (экран гаснет)


//Переключение табов Portfolio и рандомное перемещение картинок Portfolio
function chooseTabAndMakeRandom(event) {
    if (event.target.tagName === 'BUTTON') {
        TABS.querySelectorAll('button').forEach(el =>
            el.classList.remove('portfolio__tabs-item_active'));
        event.target.classList.add('portfolio__tabs-item_active');
        event.stopPropagation();

        let arrOfSrc = [];
        PROJECTS.querySelectorAll('img').forEach((el) => {
            arrOfSrc.push(el.src);
            el.src = '';
        })
        let randomArr = arrOfSrc.sort(() =>  Math.random() - 0.5);
        PROJECTS.querySelectorAll('img').forEach((el, i) => el.src = randomArr[i]);
    }
}

TABS.addEventListener('click', chooseTabAndMakeRandom);

//Добавляем рамку выбранному проекту Portfolio
PROJECTS.addEventListener('click', event => {
    if (event.target.tagName === 'IMG') {
        PROJECTS.querySelectorAll('img').forEach(el => {
            el.classList.remove('portfolio__photo-grid-item_active');
        });
        event.target.classList.add('portfolio__photo-grid-item_active');
    }
});

//Отменяем отправление данных по кнопке Сабмит. Добавляем окно с отправленными опциями поверх.

//Слушатели событий
