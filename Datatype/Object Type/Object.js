// Creating an object
const car = {
    brand: 'Toyota',//specify the value
    model: 'Corolla',
    year: 2024
};

// Accessing object properties
console.log(car.brand);  //to access the property of an object always using the object name
console.log(car['model']);  

// Adding a new property
car.color = 'blue';
console.log(car.color);  

// Modifying an existing property
car.year = 2025;
console.log(car.year);  

// Deleting a property
delete car.model;
console.log(car.model);  
