
//In JavaScript, Object.values() is a built-in method used to retrieve
// an array of a given object's own enumerable property values.
const person = {
    name: 'Alice',
    age: 30,
    job: 'Engineer'
};

const values = Object.values(person);
console.log(values); // Outputs: ['Alice', 30, 'Engineer']
const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020
};

Object.values(car).forEach(value => {
    console.log(value);
});
