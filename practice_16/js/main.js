const productNameEl = document.querySelector('#productName');
const productCategoryEl = document.querySelector('#productCategory');
const productPriceEl = document.querySelector('#productPrice');
const productDescriptionEl = document.querySelector('#productDescription');
const addProductBtn = document.querySelector('#addProductBtn');
const productsContainerEl = document.querySelector('#productsContainer');

const productsArray = [];

const cartInstance = {};

// отрендерить товар - в виде карточки
function renderProduct(product) {
    let productElement = document.createElement('div');
    productElement.classList.add('product-card');
    let nameEl = document.createElement('p');
    nameEl.classList.add('product-name');
    let categoryEl = document.createElement('p');
    categoryEl.classList.add('product-category');
    let priceEl = document.createElement('p');
    priceEl.classList.add('product-price');
    let descriptionEl = document.createElement('p');

    let buttonsContainerEl = document.createElement('div');
    buttonsContainerEl.classList.add('buttons-container');
    let addToCartBtn = document.createElement('button');
    addToCartBtn.innerText = 'Add';
    addToCartBtn.addEventListener('click', (event) => {
        // cartInstance.addIntoCart(product);
    });
    addToCartBtn.classList.add('button', 'button-cart');

    let dropFromCartBtn = document.createElement('button');
    dropFromCartBtn.innerText = 'Drop';
    dropFromCartBtn.addEventListener('click', (event) => {
        // cartInstance.dropFromCart(product);
    });
    dropFromCartBtn.classList.add('button', 'button-cart-drop');
    buttonsContainerEl.append(addToCartBtn, dropFromCartBtn);

    descriptionEl.innerText = product.description;
    nameEl.innerText = product.name;
    categoryEl.innerText = product.category;
    priceEl.innerText = product.price;

    productElement.append(nameEl, categoryEl, priceEl, descriptionEl, buttonsContainerEl);
    return productElement;
};

// отрендерить список товаров
function renderProducts() {
    productsContainerEl.innerHTML = '';
    productsArray.forEach( (product) => {
        const productEl = renderProduct(product);
        productsContainerEl.append(productEl);
    });
};

addProductBtn.addEventListener('click', (event) => {
    // Здесь нам предстоит создать объект класса Product, заполнить его данными из инпутов,
    // и добавить его в массив products.
    // Также нужно очистить инпуты.

    const product = {}; // пустой объект заменим конструктором класса

    productsArray.push(product);

    renderProducts();
});
