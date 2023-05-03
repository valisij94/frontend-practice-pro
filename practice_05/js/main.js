/****************************************** Блок работы с массивами ***********************************************/

// Массив чисел (примитивы)
const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11];



const ball = {
    name: "Ball",
    category: "Sport",
    price: 100
};
const gloves = {
    name: "Gloves",
    category: "Sport",
    price: 140
};
const shoes = {
    name: "Sport shoes",
    category: "Sport",
    discount: 0.1,
    price: 320
};
const hammer = {
    name: "Hammer",
    category: "Tools",
    price: 40
};
const saw = {
    name: "Saw",
    category: "Tools",
    discount: 0.15,
    price: 75
};
const shark = {
    name: "Shark toy",
    category: "Other",
    price: 45
};
const drill = {
    name: "Drill",
    category: "Tools",
    discount: 0.05,
    price: 85
};

// Массив объектов
let products = [ball, gloves, shoes, hammer, saw, drill, shark];

// Массив строк
let stringArray = ['This', 'is', 'an', 'array', 'of', 'strings'];




/******************************************* Блок работы с DOM ****************************************************/
const rootElement = document.querySelector('.root');

function renderProduct(product) {
    const productContainer = document.createElement('div');
    productContainer.dataset.name = product.name;
    const productName = document.createElement('p');
    const productCategory = document.createElement('p');
    const productPrice = document.createElement('p');
    const productHeader = document.createElement('div');
    // применяем стили
    productContainer.classList.add('product-card');
    productName.classList.add('product-name');
    productCategory.classList.add('product-category');
    productPrice.classList.add('product-price');
    productHeader.classList.add('product-header');
    // DISCOUNT
    if (product.discount) {
        productPrice.classList.add('discounted');
    }
    // добавляем текстовки элементов
    productName.innerText = product.name;
    productCategory.innerText = product.category;
    productPrice.innerText = product.price + " RUB";
    // добавляем элементы в контейнер
    productHeader.append(productName, productPrice);
    productContainer.append(productHeader, productCategory);
    return productContainer;
}

function renderProductsContainer() {
    const productsContainer = document.createElement('div');
    productsContainer.classList.add('products-container');
    rootElement.append(productsContainer);
}

function renderProductList(products) {
    /** Здесь нужно добавить код, который отрендерит наши товары в контейнер товаров */
}

/******************* Блок для формы поиска ***********************************/

function onSearchButtonClick() {
 /** Здесь нужно добавить код для обработки события нажатия на кнопку "Поиск"
  * Нужно прочитать то, что ввел пользователь в поле "Поиск", и отобразить только те товары,
  * у которых название товара содержит то, что ввел пользователь (без учета регистра)
  */
}

function renderSearchInput() {
    // рисуем форму поиска
    const searchContainer = document.createElement('div');
    searchContainer.classList.add('search-container');
    const searchInput = document.createElement('input');
    searchInput.setAttribute('type', 'text');
    searchInput.classList.add('search-input');
    const searchButton = document.createElement('button');
    searchButton.classList.add('button');
    searchButton.innerText = "Search";
    // добавляем эл-ты поиска в контейнер
    searchContainer.append(searchInput);
    searchContainer.append(searchButton);
    // добавляем контейнер поиска на страницу
    rootElement.append(searchContainer);
    // добавляем обработчик на событие клика на кнопку поиска
    searchButton.addEventListener( 'click', onSearchButtonClick);
}


renderProductsContainer();
renderProductList(products);
renderSearchInput();
