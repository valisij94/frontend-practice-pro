const productsContainerEl = document.querySelector('#productsContainer');
let productsArray = [];

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
    descriptionEl.classList.add('product-description');

    let buttonsContainerEl = document.createElement('div');
    buttonsContainerEl.classList.add('buttons-container');
    let addToCartBtn = document.createElement('button');
    addToCartBtn.innerText = 'Add';
    addToCartBtn.addEventListener('click', (event) => {
        // Something interesting here...
    });
    addToCartBtn.classList.add('button', 'button-cart');

    let dropFromCartBtn = document.createElement('button');
    dropFromCartBtn.innerText = 'Drop';
    dropFromCartBtn.addEventListener('click', (event) => {
        // Also something interesting...
    });
    dropFromCartBtn.classList.add('button', 'button-cart-drop');
    buttonsContainerEl.append(addToCartBtn, dropFromCartBtn);

    descriptionEl.innerText = product.description;
    nameEl.innerText = product.title;
    categoryEl.innerText = product.category;
    priceEl.innerText = product.price;

    productElement.append(nameEl, categoryEl, priceEl, descriptionEl, buttonsContainerEl);
    return productElement;
};

function renderProducts(products) {
    productsContainerEl.innerHTML = '';
    products.forEach( (product) => {
        const productEl = renderProduct(product);
        productsContainerEl.append(productEl);
    });
};

// запросить и отрендерить список товаров
async function requestProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const jsonData = await response.json();
    productsArray = jsonData;
    renderProducts(jsonData);
};

requestProducts();
