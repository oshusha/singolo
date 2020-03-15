'use strict';

const MENU = document.getElementById('menu');
const TABS = document.getElementById('tabs_menu');
const PROJECTS = document.getElementById('projects');
const FORM = document.getElementById('form');
const BUTTON = document.getElementById('form__button');
const POPUP = document.getElementById('popup');
const CLOSE_BUTTON = document.getElementById('close__button');

//Реализуем активные пункты меню при перемещении по ним
function chooseItemMenu(event) {
    MENU.querySelectorAll('a').forEach(el =>
        el.classList.remove('navigation__link_state_active'));

    event.target.classList.add('navigation__link_state_active');
}

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

//Добавляем рамку выбранному проекту Portfolio
function addBorderForProjects(event) {
    if (event.target.tagName === 'IMG') {
        PROJECTS.querySelectorAll('img').forEach(el => {
            el.classList.remove('portfolio__photo-grid-item_active');
        });
        event.target.classList.add('portfolio__photo-grid-item_active');
    }
};

//Отменяем отправление данных по кнопке Сабмит. Добавляем попап с отправленными опциями поверх.
function cancelSubmit(event) {
    event.preventDefault();
}

function openPopup(event) {
    const subject = document.getElementById('subject').value.toString();
    const describe = document.getElementById('describe').value.toString();

    if (subject === '') {
        document.getElementById('popup__subject').innerText = 'Без темы';
    }

    if (describe === '') {
        document.getElementById('popup__describe').innerText = 'Без описания';
        POPUP.classList.remove('popup__hidden');
    }

    document.getElementById('popup__result-subject').innerText = subject;
    document.getElementById('popup__result-describe').innerText = describe;

    POPUP.classList.remove('popup__hidden');

}

function closePopup(event) {
    if (event.target.tagName === 'BUTTON') {
        document.getElementById('popup__result-subject').innerText = ''
        document.getElementById('popup__result-describe').innerText = '';
        POPUP.classList.add('popup__hidden');
        FORM.reset();
    }
}

//Слушатели событий
MENU.addEventListener('click', chooseItemMenu);
TABS.addEventListener('click', chooseTabAndMakeRandom);
PROJECTS.addEventListener('click', addBorderForProjects);
FORM.addEventListener('submit', cancelSubmit);
BUTTON.addEventListener('click', openPopup);
CLOSE_BUTTON.addEventListener('click', closePopup);


// //6. Открываем форму редактирования данных пользователя
// const popupEdit = document.querySelector('.popup-edit');
// const userInfoEdit = document.querySelector('.user-info__edit');
//
// function addClassToPopupEdit() {
//     popupEdit.classList.add('popup_is-opened');
// }
//
//
// //7. Закрываем форму редактирования данных пользователя
// const popupEditClose = document.querySelector('.popup-edit__close');
// function deleteClassToPopupEdit() {
//     popupEdit.classList.remove('popup_is-opened');
// }
//
//
// //8. Получение имени и информации о себе в поля ввода
// let infoName = document.querySelector('.user-info__name').textContent;
// let infoJob = document.querySelector('.user-info__job').textContent;
// const nameProfile = document.forms.profile.elements.name;
// const aboutProfile = document.forms.profile.elements.about;
//
// nameProfile.value = infoName;
// aboutProfile.value = infoJob;
