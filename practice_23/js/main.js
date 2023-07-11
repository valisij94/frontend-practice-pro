const productsContainerEl = document.querySelector('#productsContainer');
let productsArray = [];

// Cart array
let cart = [];

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
        addToCart(product.id, product.title);
    });
    addToCartBtn.classList.add('button', 'button-cart');

    let dropFromCartBtn = document.createElement('button');
    dropFromCartBtn.innerText = 'Drop';
    dropFromCartBtn.addEventListener('click', (event) => {
        removeFromCart(product.id);
        console.log(cart);
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

/*
1. Добавляем возможность работы с корзиной товаров. Наша задача - как-то хранить корзину товаров.
 - для этого нужно создать переменную
 - мы будем хранить название, ИД товара в корзине, и количество единиц товара в корзине
 */

 /*
 2. Пишем функцию добавления в корзину (`addToCart`). Функция в качестве аргумента будет принимать ИД и название товара. Она должна проверить наличие в корзине такого товара (с таким ИД). Если такой товар уже есть - увеличить кол-во на 1. Если нет - добавить объект с данными об этом товаре (ИД, название и количество, в данном случае 1).
 */

 function addToCart(productId, productName) {
    const existingProduct = cart.find( product => product.id === productId );
    if (existingProduct) {
        existingProduct.count += 1;
    }
    else {
        cart.push( {
            id: productId,
            name: productName,
            count: 1
        } );
    }
 };

 /*
 3. Пишем функцию удаления из корзины (`removeFromCart`). Функция принимает ИД товара. Задача - если в корзине такого товара нет, то ничего не делаем. Иначе - уменьшаем кол-во товара на 1. ВАЖНО! Нам не особо нужны товары с нулевым/отрицательным количеством.
 */

 function removeFromCart(productId) {
    let existingProductIndex = -1;
    const existingProduct = cart.find( (product, idx) => {
        if (product.id === productId) existingProductIndex = idx;
        return product.id === productId;
    });

    if (existingProduct) {
        if (existingProduct.count > 1) {
            existingProduct.count -= 1;
        }
        else {
            cart.splice(existingProductIndex, 1);
        }
    }
 }

 /*
 4. Теперь пора показать корзину. Корзину мы будем показывать как модальное окно.
 - добавляем в разметку кнопку "показать корзину"
 - добавляем в разметку div для корзины. С учетом того, что мы хотим ее показывать как модальное окно, нам нужно сделать "контейнер" для всей модалки (серый фон), и разместить само модальное окно. Отступ сверху от верхнего края до модального окна - 10% от общей высоты. По горизонтали - отцентрировать. Ширину модалки можно ограничить 400 пикселями.
 - в модалке, нам нужно показывать товары в корзине, в виде списка.
 - если товаров в корзине нет - показываем сообщение "Корзина пуста"
 - при клике по серому фону, нам нужно закрывать модальное окно. Надо чтобы модалка закрывалась ТОЛЬКО при клике по серому фону, но не закрывалась при клике по самой модалке.
 */

 const modal = document.querySelector('.modal');
 const showCartBtn = document.querySelector('#showCart');

 showCartBtn.addEventListener('click', (event) => {
    modal.style.display = 'block';
 });

 modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
 });