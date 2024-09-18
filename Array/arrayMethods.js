// to find the length of an array usinng length propperty
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size);

//The JavaScript method toString() converts an array to a string of (comma separated) array values.
let x=fruits.toString();
console.log(x);
//Get the third element of fruits using at():
let fruit = fruits.at(2);
console.log(fruit);//it is used to get the element at particular index

//The at() method returns an indexed element from an array.
let a= fruits.at("orange");
undefined
console.log(a);
/*Many languages allows negative bracket indexing like [-1] to access elements from the end of an object / array / string.
This is not possible in JavaScript, because [] is used for accessing both arrays and objects. obj[-1] refers to the value of key -1, not to the last property of the object.
The at() method was introduced in ES2022 to solve this problem.*/

//The join() method also joins all array elements into a string.

//It behaves just like toString(), but in addition you can specify the separator:
let b=fruits.join('*');

console.log(b);
//to remove a element from array
fruits.pop();
//shifting is equivalent to popping, but working on the first element instead of the last.
// The shift() method returns the value that was "shifted out":
fruits.shift();

//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
fruits.unshift("Lemon");

//Using delete() leaves undefined holes in the array.

//Use pop() or shift() instead.
delete fruits[0];

//The concat() method creates a new array by merging (concatenating) existing arrays:
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
//The concat() method does not change the existing arrays. It always returns a new array.

//The concat() method can take any number of array arguments.
//The copyWithin() method copies array elements to another position in an array:
fruits.copyWithin(2, 0);
//The copyWithin() method overwrites the existing values.

//The copyWithin() method does not add items to the array.

//The copyWithin() method does not change the length of the array.
//Flattening an array is the process of reducing the dimensionality of an array.

//Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.
//The flat() method creates a new array with sub-array elements concatenated to a specified depth.
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
//he flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
const myArr1 = [1, 2, 3, 4, 5, 6];
const newArr1 = myArr.flatMap(x => [x, x * 10]);
//he splice() method can be used to add new items to an array:

fruits.splice(2, 0, "Lemon", "Kiwi");
/*The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

The splice() method returns an array with the deleted items:*/
//With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:
fruits.splice(0, 1);
/*The first parameter (0) defines the position where new elements should be added (spliced in).

The second parameter (1) defines how many elements should be removed.

The rest of the parameters are omitted. No new elements will be added.*/
/*The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array
, keeping the original array unchanged, while the old method altered the original array.
*/
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
//The slice() method slices out a piece of an array into a new array:
const citrus = fruits.slice(1);
//
