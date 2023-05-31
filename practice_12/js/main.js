const productsContainerEl = document.querySelector('#productsContainer');

const categorySelect = document.querySelector('#categorySelect');

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

    nameEl.innerText = product.title;
    categoryEl.innerText = product.category;
    priceEl.innerText = product.price;

    productElement.append(nameEl, categoryEl, priceEl);
    return productElement;
};

// отрендерить список товаров
function renderProducts( productsArray ) {
    productsArray.forEach( (product) => {
        const productEl = renderProduct(product);
        productsContainerEl.append(productEl);
    });
};

// очистить контейнер товаров
function clearProducts() {
    productsContainerEl.childNodes.forEach( child => child.remove() );
};

// массив с "фейковыми" товарами
const fakeProducts = [
    {
        id: 1,
        title: 'Hammer',
        price: '100',
        category: 'Tools',
        description: 'Very useful: sometimes can help to convince somebody'
    },
    {
        id: 2,
        title: 'Saw',
        price: '200',
        category: 'Tools',
        description: 'Also very useful: can separate something'
    },
    {
        id: 3,
        title: 'Ball',
        price: '50',
        category: 'Sport',
        description: 'Nothing to say here'
    },
    {
        id: 4,
        title: 'Jeans',
        price: '150',
        category: 'Clothing',
        description: 'Just a jeans'
    },
];


function requestProducts() {
    // здесь позже мы будем запрашивать товары с бэка
    clearProducts();
    renderProducts(fakeProducts);
};

requestProducts();
