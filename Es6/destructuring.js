/*Destructuring is a feature in JavaScript that allows you to unpack values from arrays or properties
 from objects into distinct variables. This feature is useful for simplifying and making your code more readable. 
Destructuring was introduced in ECMAScript 6 (ES6).*/
//Array destructuring allows you to extract values from an array and assign them to variables in a single statement.
const numbers = [1, 2, 3];
const [first, second, third] = numbers;

console.log(first);  // Outputs: 1
console.log(second); // Outputs: 2
console.log(third); // Outputs: 3
//skip items
const numbers1 = [1, 2, 3, 4];
const [first1, , third1] = numbers1;

console.log(first); // Outputs: 1
console.log(third); // Outputs: 3
//defalut value
const numbers2= [1];
const [first2, second2 = 2] = numbers;

console.log(first);  // Outputs: 1
console.log(second); // Outputs: 2
