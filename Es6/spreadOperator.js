/*The spread operator is represented by three dots (...) and is used to expand elements of arrays or properties of objects 
into individual items. This means you can spread the items of an array into a new array or into function arguments, 
or you can spread the properties of an object into a new object.*/

//Using the Spread Operator with Arrays
//Copying an Array
const ar1=[1,2,3,4];
const copyar=[...ar1];
console.log(copyar);
// combining array
const ar2=[5,6,7,8];
const combinear=[...ar1,...ar2];
console.log(combinear);
//adding element to array
const newar=[...ar1,5,6];
//function aruguments
const add=(a,b)=>{
    return a+b;
};
const a=[12,34,];
const result= add(...a);
console.log(result);
//using object
const person = { name: 'Alice', age: 25 };
const copyOfPerson = { ...person };

console.log(copyOfPerson); // Outputs: { name: 'Alice', age: 25 }
const perso1n = { name: 'Bob', age: 30 };
const location = { city: 'New York', country: 'USA' };
const personWithLocation = { ...person1, ...location };

console.log(personWithLocation); // Outputs: { name: 'Bob', age: 30, city: 'New York', country: 'USA' }

const person3= { name: 'Charlie', age: 25 };
const updatedPerson = { ...person3, age: 30 };

console.log(updatedPerson); // Outputs: { name: 'Charlie', age: 30 }

const person4 = { name: 'Diana', age: 28 };
const updatedPerson2 = { ...person4, city: 'London' };

console.log(updatedPerson2); // Outputs: { name: 'Diana', age: 28, city: 'London' }


