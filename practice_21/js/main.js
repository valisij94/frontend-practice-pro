const productsContainerEl = document.querySelector('.products-container');

function renderProduct(product) {
    const productContainer = document.createElement('div');
    productContainer.classList.add('product-card');
    // title
    const productTitle = document.createElement('h3');
    productTitle.classList.add('product-title');
    productTitle.innerText = product.title;
    // price
    const productPrice = document.createElement('p');
    productPrice.classList.add('product-price');
    productPrice.innerText = product.price;
    // description
    const productDescription = document.createElement('p');
    productDescription.classList.add('product-description');
    productDescription.innerText = product.description;
    // add all into the contaoner
    productContainer.append(productTitle, productDescription, productPrice);
    // and return the DOM element we've created
    return productContainer;
};

function renderProducts(products) {
    while (productsContainerEl.firstChild) {
        // и здесь нам нужно из контейнера удалить этот элемент
        productsContainerEl.removeChild(productsContainerEl.firstChild);
    }
    products.forEach( product => {
        const productEl = renderProduct(product);
        productsContainerEl.append(productEl);
    });
};

/*
1. Ставим обработчик на событие загрузки документа (`DOMContentLoaded`). Нужно вывести в консоль текущее время (форматированное по умолчанию). Чтобы получить строку с текущим временем, используем `new Date()`.
*/

// document.addEventListener('DOMContentLoaded', (event) => {
//     console.log(new Date());
// });

/*
2. Пишем функцию `requestProducts`. Она должна запрашивать с бэка (`https://fakestoreapi.com/products`) список товаров, преобразовать результат в JSON, и передать результат в функцию `renderProducts`. То есть, наша задача - получить данные товаров, и отрендерить их.
*/

// function requestProducts() {
//     fetch('https://fakestoreapi.com/products')
//       .then(response => response.json())
//       .then(data => renderProducts(data))
//       .catch(err => console.log('Something went wrong!'));
// }

async function requestProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const jsonData = await response.json();
        renderProducts(jsonData);
    }
    catch(err) {
        console.log('Error!')
    }
}

/*
3. Добавляем вызов `requestProducts` в событие загрузки документа (п.1). То есть, нам нужно загружать наши товары при загрузке документа и готовности DOM.
*/
// document.addEventListener('DOMContentLoaded', (event) => {
//     requestProducts();
// });

/*
4. Работаем с текстовым полем `input#testInput`. Наша задача - протоколировать нажатие каждой кнопки (выводить в консоль ее код).
 - нужен обработчик события нажатия кнопки на инпут. Событие - `keypress`
 - в объекте события, есть свойство `charCode` - это код нажатой кнопки. Его нужно вывести в консоль.
 */

//  const testInput = document.querySelector('#testInput');
//  testInput.addEventListener('keypress', (event) => {
//     console.log(event.charCode);
//  });

/*
5. Пишем свою функцию валидации для инпута, назовем ее `validateInput`. Предположим, мы вводим количество единиц товара, и у нас разрешенные символы - только цифры. Наша задача - запретить ввод в текстовое поле не-цифровых символов.
 - нужен обработчик на `keypress` текстового поля - это будет наша функция `validateInput`
 - при обрабокте события, проверяем `event.charCode`.
 - коды клавиш-цифр - от 48 до 57.
 - здесь нам нужно ПРЕДОТВРАТИТЬ стандартное поведение (т.е. изменение текста инпута). В этом нам поможет `preventDefault`.
 */

 function validateInput(event) {
    if (event.charCode > 57 || event.charCode < 48) {
        event.preventDefault();
    }
 }

 const testInput = document.querySelector('#testInput');
//  testInput.addEventListener('keypress', validateInput);

//  setTimeout( () => {
//     testInput.removeEventListener('keypress', validateInput);
//     console.log('removed')
//  }, 10000);

/*
6. Усложняем валидацию. Теперь мы хотим проверять правильность ввода при "уходе" фокуса из текстового поля. Что требуется:
 - закомментировать добавление обработчика `keypress` на инпут
 - добавить обработчик события утери фокуса (`focusout`) на наш инпут
 - при обработке события, проверять текст инпута (через `event.target.value`)
 - если текст не является числом (используем метод `isNaN`), то возвращаем фокус в наше текстовое поле (для этого, у DOM-элементов есть метод `focus` - то есть нам нужно вызвать этот метод у инпута).
 */

testInput.addEventListener('focusout', (event) => {
    if (isNaN(event.target.value)) {
        event.target.focus();
        event.target.classList.add('error-input');
    }
    else {
        event.target.classList.remove('error-input');
    }
});

/*
7. Добавляем визуализации - расширяем обработчик события утери фокуса у инпута. Теперь, если в инпуте не число - то применяем к инпуту класс `error-input`. Если число валидное - то этот класс убираем.
*/
