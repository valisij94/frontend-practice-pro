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
    clearProducts();
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

// Научиться получать список товаров с бэка. Список товаров запрашиваем по адресу `https://fakestoreapi.com/products`. Результат вывести в консоль.

// Рендерим результат. При получении ответа от бэка, вызываем функцию `renderProducts`, и передаем туда массив товаров, полученный с бэка.

// Заполняем фильтр категорий товаров. Нужно получить с бэка список всех возможных категорий, и результат отрендерить в списке.
//  - адрес запроса - `https://fakestoreapi.com/products/categories`. В результате придет массив с категориями.
//  - в список нам нужно добавлять "детей". Дети - это теги `<option>`, у которых value и текст - это категория товара (из запроса). Пример: для категории товаров "jewelery", мы должны рендерить такое:
// `<option value="jewelery">Jewelery</option>`. Обратите внимание, что текст - с большой буквы, хотя бэк нам возвращает категорию с маленькой буквы - т.е. для текста надо еще изменить регистр первой буквы категории.
function makeRequest() {
    fetch('https://fakestoreapi.com/products')
     .then( res => res.json() )
     .then( data => {
        // пройтись по массиву категорий
        // для каждого жлемента создать <option>
        // присвоить атрибут value
        // присвоить innerText
        // добавить созданный DOM-элемент в categorySelect (через append)
        renderProducts(data)
     });
}

makeRequest();

const capitalizeFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1);

function requestCategories() {
    fetch('https://fakestoreapi.com/products/categories')
    .then(result => result.json())
    .then(jsonResult => {
        jsonResult.forEach( category => { // category = electronics
            const optionEl = document.createElement('option');
            optionEl.setAttribute('value', category);
            optionEl.innerText = capitalizeFirst(category);
            categorySelect.appendChild(optionEl);
        });
    } );
}

requestCategories();

/**
 * 4. "Оживляем" фильтр по категориям товаров. Нужно:
 - добавить обработчик события `change` на выпадающий список с категориями
 - в обработчике, нужно отправлять запрос товаров выбранной категории (чтобы получить выбранную категорию, используем `event.target.value`). Товары берем по адресу `https://fakestoreapi.com/products/category/CATEGORY_NAME`.
 */

 categorySelect.addEventListener('change', (event) => {
    loadingEl.style.display = 'block';
    fetch(`https://fakestoreapi.com/products/category/${event.target.value}`) // promise 1
     .then((res /* Обхект HTTP-ответа */) => res.json()) // promise 2
     .then((data /* массив с объектами товаров, который надо отрендерить */)=>renderProducts(data))
     .finally( () => loadingEl.style.display = 'none' );
 });


 /**
  * Добавляем показ иконки загрузки перед отправкой запроса. Спрятать ее необходимо в любом случае, после отработки запроса (вне зависимости от результатов).
  */