/* 
the prototype is a fundamental concept that enables object-oriented programming. 
It allows objects to inherit properties and methods from other objects, 
providing a mechanism for code reuse and shared behavior*/

//--------creating the protoype using constructor function------
// Vehicle constructor
function Vehicle(brand, type) {
    this.brand = brand;
    this.type = type;
}

Vehicle.prototype.travel = function() {
    console.log(this.brand + ' ' + this.type + ' used to travel');
};

// Create an instance of Vehicle
const x = new Vehicle('Thar', 'car');
x.travel(); // Outputs: Thar car used to travel

// Animal class
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + ' makes a noise');
    }
}

// Create an instance of Animal
const a = new Animal('cat');
a.speak(); // Outputs: cat makes a noise

// Drive constructor
function Drive(brand, type) {
    Vehicle.call(this, brand, type); // Call the parent constructor
}

// Set up inheritance
Drive.prototype = Object.create(Vehicle.prototype);
Drive.prototype.constructor = Drive;

// Override travel method
Drive.prototype.travel = function() {
    console.log(this.brand + ' ' + this.type + ' used to drive');
};

// Create an instance of Drive
const bike = new Drive('RX100', 'bike');
bike.travel(); // Outputs: RX100 bike used to drive

