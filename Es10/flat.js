/*The flat() method in JavaScript is used to create a new array with all sub-array
 elements concatenated into it recursively up to a specified depth. 
It is particularly useful for flattening nested arrays.*/
const arr = [1, [2, 3], [4, [5, 6]]];
console.log(arr.flat()); // Outputs: [1, 2, 3, 4, [5, 6]]
// depthlevel 2

const arr2 = [1, [2, 3], [4, [5, 6]]];
console.log(arr2.flat(2)); // Outputs: [1, 2, 3, 4, 5, 6]
//using to flatten all levels
const arr3 = [1, [2, [3, [4, [5]]]]];
console.log(arr3.flat(Infinity)); // Outputs: [1, 2, 3, 4, 5]
