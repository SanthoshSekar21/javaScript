/*In JavaScript, the index operator is used to access elements in arrays or characters in strings using bracket notation.
 It is represented by square brackets ([]) and 
allows you to retrieve or set values at specific positions in these data structures.*/
const fruits = ['apple', 'banana', 'cherry'];

console.log(fruits[0]); // Outputs: 'apple'
console.log(fruits[1]); // Outputs: 'banana'
console.log(fruits[2]); // Outputs: 'cherry'

const numbers = [1, 2, 3, 4];

numbers[2] = 99; // Change the value at index 2
console.log(numbers); // Outputs: [1, 2, 99, 4]

//using the string
const message = 'Hello';

console.log(message[0]); // Outputs: 'H'
console.log(message[1]); // Outputs: 'e'
console.log(message[4]); // Outputs: 'o'

let greeting = 'World';

greeting[0] = 'w'; // This will not change the string
console.log(greeting); // Outputs: 'World'

//to modify the string
let newGreeting = 'w' + greeting.slice(1); // Creating a new string
console.log(newGreeting); // Outputs: 'world'
