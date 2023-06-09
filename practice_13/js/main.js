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
    while (productsContainerEl.firstChild) {
        productsContainerEl.removeChild(productsContainerEl.firstChild);
    }
};

const loadingEl = document.querySelector('#loadingMessage');

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

/**
 * Имитация результата успешного запроса - т.е. бэк вернул нам результат, где содержатся нужные нам данные
 */
const successResponse = {
    ok: true,
    status: 200,
    json: function() {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve(fakeProducts);
            }, 1500);
        } )
    },
};

/**
 * Имитация неуспешного запроса - сам запрос нормальный, а вот разобрать результат не удается.
 */
const faieldResponse = {
    ok: true,
    status: 200,
    json: function() {
        throw new Error('Failed to parse!')
    }
};

//
function makeRequest() {
    // сделать fetch запрос по адресу https://fakestoreapi.com/products
    return fetch('https://fakestoreapi.com/products');

    // return new Promise( (resolve, reject) => {
    //     setTimeout( () => {
    //         resolve(successResponse)
    //     }, 3000 );
    // } );
};

makeRequest().
    then( result => result.json() )
    .then( res => {
        // ввыести в консоль суммарную стоимость всех товаров
        const sum = res.reduce( (acc, val) => acc + val.price, 0);
        console.log('Total sum:', sum);
    } )
    .catch( (error) => console.log(error.message))
    .finally( () => console.log(`Запрос отправлен: ${Date.now()}`) );