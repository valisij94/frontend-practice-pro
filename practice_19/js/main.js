class Product {

    constructor(id, name, price, description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
    }
}

class PowerTool extends Product {
    constructor(id, name, price, description, power, warranty) {
        super(id, name, price, description);
        this.power = power;
        this.warranty = warranty;
    }
}

class Tool extends Product {
    constructor(id, name, price, description, strength) {
        super(id, name, price, description);
        this.strength = strength;
    }
}

const weirdArray = {
    length: 2,
    0: 'Saw',
    1: 'Hammer'
}

const veryWeirdArray = {
    0: 'Drill',
    1: 'Axe',
    2: 'Nails',
};

/*
1. Создаем объект класса `Product`. ID=1, name="Product", price=100, description = "Simple product description". Нужно в этот объект (именно в объект, НЕ в класс!), добавить метод addDiscount(discount), который должен установить новую цену товару. Новая цена = старая цена * discount * 0.01. ВАЖНО: при решении задачи, работать через контекст (`this`)!
*/

const prod = new Product(1 , "Product", 100, "Simple description");

// const myFunc = function(discount) {
//     this.price = this.price * discount * 0.01;
// };

// prod.addDiscount = myFunc;

// prod.addDiscount(10);

// console.log(prod);

/*
2. Пишем функцию `showProductInfo()`. Задача функции - выводить в консоль информацию о товаре, вида: "Товар НАЗВАНИЕ, цена - ЦЕНА". Функция должна быть контексто-ориентированной, т.е. предполагается, что она будет вызвана в контексте объекта товара.
*/

function showProd() {
    console.log(`Товар ${this.name}, цена - ${this.price}`);
}

/*
Вызовите функцию `showProductInfo()` в контексте объекта из п.1. Для этого, нам понадобится явно привязать контекст.
*/

// showProductInfo.call(prod);
// showProductInfo.apply(prod);


/*
4. Применяем нашу функцию - нужно сделать так, чтобы она была доступна для ВСЕХ объектов класса `Product`, и его потомков. Для этого, нам может пригодиться прототип.
*/
// Product.prototype.showProductInfo = showProd;

// prod.showProductInfo();

/*
5. Работаем с привязкой контекста. У нас есть метод `customMap`, который повторяет функциональность метода массивов `map`. И есть массив `numbers`. Мы хотим получить из массива `numbers` другой, новый массив `newNumbers`, элементы которого будут рассчитаны так: `newNumbers[i] = numbers[i] * numbers[i]`. То есть, массив квадратов. Сделать это вызовом метода `customMap`, в контексте массива `numbers`.
*/

function customMap(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result[i] = callback(this[i]);
    }
    return result;
}

const numbers = [1,2,3,4,5];

const square = (num) => num * num;

const newNumbers = customMap.call(numbers, square);
/*
1. привязываем контекст методом call - теперь наш customMap будет вызван в контексте numbers
2. 2-м аргументом метода call передаем аргумент, которій будет передан в функцию customMap, к которой привязываем контекст
3. вызов функции customMap  вконтексте numbers
*/

console.log(newNumbers);