
/**
 * Это - массив с товарами. Считаем, что он пришел к нам с бэкенда, и нам нужно его
 * отрисовать на странице.
 */
const products = [
    {
        name: "Ball",
        category: "Sport",
        price: 100
    },
    {
        name: "Gloves",
        category: "Sport",
        price: 140
    },
    {
        name: "Sport shoes",
        category: "Sport",
        discount: true,
        price: 320
    },
    {
        name: "Hammer",
        category: "Tools",
        price: 40
    },
    {
        name: "Saw",
        category: "Tools",
        discount: true,
        price: 75
    },
    {
        name: "Shark toy",
        category: "Other",
        price: 45
    },
    {
        name: "Truck",
        category: "Other",
        price: 80
    }
];

// Определяем наш контейнер, в котором мы хотим отрисовать список товаров.
const rootElement = document.querySelector('.root');

/**
 * Функция, которая создает div для товара (НЕ ДОБАВЛЯЯ ЕГО В DOM!)
 */
function renderProduct(product) {

    const productContainer = document.createElement('div');
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

/**
 * Функция, которая создает элемент div, в котором будут рендериться наши
 * карточки товаров.
 * Функция ДОБАВЛЯЕТ В DOM этот контейнер
 */
function renderProductsContainer() {
    const productsContainer = document.createElement('div');
    productsContainer.classList.add('products-container');
    rootElement.append(productsContainer);
}

/**
 * Функция, которая отрисует в контейнер (см.renderProductsContainer) карточки товаров.
 * В аргументах принимает массив товаров.
 */
function renderProductList(products) {
    const container = document.querySelector('.products-container');
    products.forEach( function(product) {
        const productContainer = renderProduct(product);
        container.append(productContainer);
    });
}

renderProductsContainer();
renderProductList(products);
