//The bind method returns a new function that, when called, has its this keyword set to a specified value.
// You can also preset arguments.
function sayName() {
    console.log('My name is ' + this.name);
}

const person = { name: 'santhosh' };

const sayNameSanthosh = sayName.bind(person);
sayNameSanthosh(); // Outputs: My name is Charlie
//preset the value
function multiply(x, y) {
    return x * y;
}

const double = multiply.bind(null, 2); // Pre-set x to 2

console.log(double(2)); // Outputs: 10
