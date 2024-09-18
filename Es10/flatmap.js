/*The flatMap() method in JavaScript is a combination of map() and flat(). 
It first applies a mapping function to each element of an array, then flattens the result by one level. This method is particularly useful when you need to perform a mapping operation that returns arrays and 
you want to avoid nested arrays in the final result.*/
const numbers = [1, 2, 3];
const result = numbers.flatMap(x => [x, x * 2]);

console.log(result); // Outputs: [1, 2, 2, 4, 3, 6]

//nested array
const arrays = [[1, 2], [3, 4], [5, 6]];
const result2 = arrays.flatMap(arr => arr);

console.log(result2); // Outputs: [1, 2, 3, 4, 5, 6]
const data = ['apple', 'banana', 'cherry'];
const result3 = data.flatMap(fruit => fruit.split(''));

console.log(result3); // Outputs: ['a', 'p', 'p', 'l', 'e', 'b', 'a', 'n', 'a', 'n', 'a', 'c', 'h', 'e', 'r', 'r', 'y']
