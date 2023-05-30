// Просто селектор - под него предстоит добавлять инпут
const contactUsButton = document.querySelector('#contactUsButton');
// Задел на задачу с показом модального окна
const modalElement = document.querySelector('.modal');

const modalContainer = document.querySelector('.modal-container');

/*************** Этот блок - для задания по показу/закрытию модального окна ******************/
// Обработчики событий кликов по кнопкам
contactUsButton.addEventListener('click', (event) => {
    modalElement.style.display = 'block';
    restoreInputsData();

    saveAllInputsData();
});

modalElement.addEventListener('click', (event) => {
    if (event.target === modalElement) {
        modalElement.style.display = 'none';
    }
});

/*************** Этот блок - для задания по работе со списком товаров ***********************/

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

const productsContainer = document.querySelector('.products-container');


const basket = {};

// отрендерить товар - в виде карточки
function renderProduct(product) {
    // товар рендерим так:
    /**
     * Название товара (шрифт 16рх)
     * Категория (шрифт 14рх)
     * Цена (шрифт 14рх)
     */
    let productElement = document.createElement('div');
    productElement.classList.add('product-card');
    let nameEl = document.createElement('p');
    nameEl.classList.add('product-name');
    let categoryEl = document.createElement('p');
    categoryEl.classList.add('product-category');
    let priceEl = document.createElement('p');
    priceEl.classList.add('product-price');

    nameEl.innerText = product.name;
    categoryEl.innerText = product.category;
    priceEl.innerText = product.price;

    productElement.append(nameEl, categoryEl, priceEl);
    productsContainer.append(productElement);
}

products.forEach( (product) => {
    renderProduct(product);
});

const lastNameInput = document.querySelector('#lastName');
const firstNameInput = document.querySelector('#firstName');
const phoneInput = document.querySelector('#phone');
const emailInput = document.querySelector('#email');

const cancelBtn = document.querySelector('#cancelContactsForm');
const sendBtn = document.querySelector('#sendContactsForm');

// работаем здесь
function saveInputsData() {
    const contactsData = {
        lastName: lastNameInput.value,
        firstName: firstNameInput.value,
        phone: phoneInput.value,
        email: emailInput.value
    };

    localStorage.setItem('contactsData', JSON.stringify(contactsData));
}

cancelBtn.addEventListener('click', (event) => {
    saveInputsData();
    modalElement.style.display = 'none';
});

function restoreInputsData() {
    const stored = localStorage.getItem('contactsData');
    if (stored) {
        const parsed = JSON.parse(stored);
        lastNameInput.value = parsed.lastName;
        firstNameInput.value = parsed.firstName;
        phoneInput.value = parsed.phone;
        emailInput.value = parsed.email;
    }
}

function clearInputsData() {
    localStorage.removeItem('contactsData');
}

sendBtn.addEventListener('click', (event) => {
    clearInputsData();
    modalElement.style.display = 'none';
})



function saveAllInputsData() {
    const inputs = document.querySelectorAll('input');

    const inputsData = {};
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].id) {
            inputsData[inputs[i].id] = inputs[i].value;
        }
    }
    localStorage.setItem('inputsData', JSON.stringify(inputsData));
}