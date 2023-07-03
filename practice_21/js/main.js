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