//Rest parameters allow you to represent an indefinite number of arguments as an array. They are used in function definitions to capture all remaining arguments into a single array.
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Outputs: 10
function multiply(factor, ...numbers) {
    return numbers.map(num => num * factor);
}

console.log(multiply(2, 1, 2, 3)); // Outputs: [2, 4, 6]
// For arrays
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];

// For function calls
const numbers = [1, 2, 3];
const sum = Math.max(...numbers);

// For objects
const obj = { a: 1, b: 2 };
const newObj = { ...obj, c: 3 };
