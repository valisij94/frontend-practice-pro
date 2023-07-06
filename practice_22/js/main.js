let storageObject = {
    click: 0,
    keypress: 0
}

/*
1. Пишем функцию валидации текстового поля `validateInput`. Она должна принимать объект Event, и проверять, что поле не пустое (т.е там введено какое-либо значение). Если поле пустое - применяем к полю класс error-input. Если непустое - убираем этот класс.
*/

function validateInput(event) {
    if (event.target.value) {
        event.target.classList.remove('error-input');
    }
    else {
        event.target.classList.add('error-input');
    }
}

/*
2. Добавляем обработчик на событие `focusout` у инпута `input#titleInput`.
*/
// const titleInput = document.querySelector('#titleInput');
// const titleInput = document.getElementById('titleInput');
// titleInput.addEventListener('focusout', validateInput);

/*
3. Усложняем задачу. Нам нужно на все инпуты, которые обязательны к заполнению, добавить валидацию на непустоту. У всех инпутов, обязательных к заполнению, есть атрибут `data-required`. То есть, нам нужно:
 - пройтись по всем инпутам в документе // querySelectorAll
 - у каждого инпута проверить наличие атрибута `data-required`.
 elem.required // FOR STANDARD ATTRIBUTES!
 elem.dataset.required // ONLY FOR DATA-ATTRIBUTES!!!
 - если такой атрибут есть - то на событие `focusout` добавляем обработчик - `validateInput`.
 - если такого атрибута нет - ничего не делаем.
 */

 const inputs = document.querySelectorAll('input');
 inputs.forEach( input => {
    if (input.dataset.required) {
        input.addEventListener('focusout', validateInput);
    }
 });

/*
4. Пишем функцию `checkNumber` - она должна принять объект event, и проверить, является ли `event.target.value` числом. Используем `isNaN`. Если число - то возвращаем `true`, иначе - `false`.
*/

// function checkNumber(event) {
//     if (isNaN(event.target.value)) {
//         event.target.classList.add('error-input');
//     }
//     else {
//         event.target.classList.remove('error-input');
//     }
// }

/*
5. Задача со звездочкой (обсуждаем и потом решаем). Нам нужно добавить валидацию введенного числа в инпуты c атрибутом data-isnumber. Валидировать также нужно на событие `focusout`. Это можно сделать или отдельным обработчиком, или доработать решение задачи 3.
*/

//  inputs.forEach( input => {
//     if (input.dataset.required) {
//         input.addEventListener('focusout', validateInput);
//     }
//     if (input.dataset.isnumber) {
//         input.addEventListener('focusout', checkNumber);
//     }
//  });

/*
6. Вспоминаем `preventDefault`. У нас под инпутами, есть кнопка "Отправить". Кнопка относится к форме с инпутами, и должна отправлять форму на сервер.
 - добавить обработчик на событие клика на эту "кнопку".
 - при клике на кнопку, нужно проверять, есть ли у нас невалидные инпуты (например, поискать в форме элементы с классом `error-input`). если у нас есть невалидные инпуты - предотвращаем поведение по умолчанию. // preventDefault()
 */
// const sendBtn = document.querySelector('button.button');
// const form = document.querySelector('form#testForm');

// sendBtn.addEventListener('click', (event) => {
//     const inputs = form.querySelectorAll('input.error-input');
//     if (inputs.length > 0) {
//         event.preventDefault();
//     }
// });