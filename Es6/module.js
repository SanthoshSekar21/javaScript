/*a module is a way to structure and organize code by dividing it into separate files, 
each with its own scope. This helps manage complexity,
 maintain clean code, and reuse code across different parts of an application.*/
 // math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
//In this file, you’re creating two functions (add and subtract) and making them available for other files to use with the export keyword.
// app.js
import { add, subtract } from './math.js';

console.log(add(5, 3));       // Outputs: 8
console.log(subtract(10, 4)); // Outputs: 6
//Here, import brings the functions from math.js into app.js, so you can use them
//This is a different way to handle modules and is commonly used in Node.js (a server-side JavaScript environment).
// math.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = { add, subtract };
// app.js
const math = require('./math');

console.log(math.add(5, 3));       // Outputs: 8
console.log(math.subtract(10, 4)); // Outputs: 6
//You use require to bring in the functions from math.js.
