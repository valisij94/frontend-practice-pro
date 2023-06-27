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


function customMap(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result[i] = callback(this[i], i);
    }
    return result;
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
