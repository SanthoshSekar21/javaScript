//the include() determine whether an array contains a certain element. if its present 
//return true and false otherwise

const fruits = ['apple', 'banana', 'mango'];

console.log(fruits.includes('banana')); // Outputs: true
console.log(fruits.includes('grape'));  // Outputs: false
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.includes(3, 2)); // Outputs: true (searches from index 2)
console.log(numbers.includes(2, 3)); // Outputs: false (searches from index 3)
//using String
const sentence = 'The quick brown fox';

console.log(sentence.includes('quick')); // Outputs: true
console.log(sentence.includes('slow'));  // Outputs: false

const text = 'Hello, world!';

console.log(text.includes('world', 5)); // Outputs: true (searches from index 5)
console.log(text.includes('world', 8)); // Outputs: false (searches from index 8)
