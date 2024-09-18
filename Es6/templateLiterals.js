/*in JavaScript are a powerful feature introduced in ECMAScript 6 (ES6) that enhance the way strings are handled.
 They allow for easier creation of strings that include embedded expressions, multi-line content, and more. 
 Here’s a detailed overview of template literals:*/
 const name = 'Alice';
const greeting = `Hello, ${name}!`;
console.log(greeting); // Outputs: Hello, Alice!
/*You can embed expressions inside template literals using ${expression}. 
The expression is evaluated, and its result is inserted into the string.*/
const a = 5;
const b = 10;
const result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result); // Outputs: The sum of 5 and 10 is 15.
