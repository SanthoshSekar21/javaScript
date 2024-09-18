/*In JavaScript, Object.keys() is a built-in method that allows you to retrieve an
 array of a given object's own enumerable property names (keys). 
This is particularly useful for iterating over an object's properties or for examining the structure of an object.*/
const person = {
    name: 'Alice',
    age: 30,
    job: 'Engineer'
};

const keys = Object.keys(person);
console.log(keys); // Outputs: ['name', 'age', 'job']
//iterate
const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020
};

Object.keys(car).forEach(key => {
    console.log(`${key}: ${car[key]}`);
});
//tranform
const user = {
    id: 1,
    name: 'Bob',
    email: 'bob@example.com'
};

const values = Object.keys(user).map(key => user[key]);
console.log(values); // Outputs: [1, 'Bob', 'bob@example.com']
const person1 = {
    name: 'Alice',
    age: 30,
    job: 'Engineer',
    city: 'New York'
};

const filteredKeys = Object.keys(person1).filter(key => key.length > 3);
console.log(filteredKeys); // Outputs: ['name', 'Engineer', 'New York']

