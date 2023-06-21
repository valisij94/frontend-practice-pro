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

const saw = new PowerTool(1, 'Saw', 150, 'Saw. Just the saw', 1500, 3);
const hammer = new Tool(2, 'Hammer', 55, 'Steel hammer', 55);
const drill = new PowerTool(3, 'Drill', 120, 'Bosch Drill', 2000, 2);
const shovel = new Tool(4, 'Shovel', 80, 'Steel Shovel', 50);

const orders = {
    'user1': [saw, hammer],
    'user2': [hammer],
    'user3': [drill, shovel],
    'user4': [shovel]
}

const ordersTotal = {};

for (let [key, val] of Object.entries(orders) ) {
    ordersTotal[key] = val.reduce( (acc,value) => acc + value.price, 0);
}

console.log(ordersTotal);