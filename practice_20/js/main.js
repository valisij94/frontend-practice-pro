const productsContainerEl = document.querySelector('.products-container');

/**
 * И вновь работаем с интернет-магазином. Наша первая задача - получить с бэка (`https://fakestoreapi.com/products`) список товаров, записать его в массив `productsDataSourtce`, и вывести его в консоль.
 */

let productsDataSource = [];

fetch('https://fakestoreapi.com/products')
   .then(res => res.json())
   .then(result => {
       productsDataSource = [...result];
       renderProducts(productsDataSource);
   });

/**
 * Пишем функцию `renderProduct`, которая будет рендерить наш товар. Ее задача - отрисовать карточку товара. В качестве аргумента функция ожидает объект product (товар, список которых мы получили в п.1). Карточка:
 - это div с классом `product-card`
 - содержит заголовок (`h3`) с классом `product-title`, и значением свойства title объекта product
 - содержит параграф (`p`) с описанием (description). Класс - `product-description`
 - содержит параграф (`p`) с ценой товара (price), класс - `product-price`.
 */

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

 /**
  * 3. Рендерим список товаров. Пишем функцию `renderProducts`, которая на вход будет принимать массив товаров. Она должна в контейнер товаров (элемент с классом `products-container`) отрендерить список наших товаров. ВАЖНО! Нужно перед отрисовкой переданного списка товаров, очистить контейнер от старых элементов. Как это сделать:
```
while (productsContainerEl.firstChild) {
        // и здесь нам нужно из контейнера удалить этот элемент
        productsContainerEl.removeChild(productsContainerEl.firstChild);
    }
```
  */

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
5. Готовимся к применению сортировок. Нам нужно написать функцию `sortProducts`, которая будет принимать аргумент `sortRule` (правило сортировки), и сортировать наш массив `productsDataSource`, в соответствии с переданным аргументом.
*/

function sortProducts(sortRule) { // price_asc
    const rules = sortRule.split('_');
    // сортируем массив по свойству sortRule
    // вызываем renderProducts для отсортированного массива
    productsDataSource.sort( (product1, product2) => {
        if (rules[1] === "asc")
            return product1[rules[0]] < product2[rules[0]] ? -1 : 1;
        else {
            return product1[rules[0]] < product2[rules[0]] ? 1 : -1;
        }
    });
};

const selectEl = document.querySelector('.select');
selectEl.addEventListener('change', (event) => {
    sortProducts(event.target.value);
    renderProducts(productsDataSource);
});
