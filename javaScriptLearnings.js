//Here Started the java Script
console.log("kick Started the projedt") ;

// primitvie data type demonstration
let age=30; // Integer
let temperature=45.9; // float or non decimal number
// Java Script Number data Type Represent both Integer and Floating point number
//java Script not have separate data Type for Integer and float


/*String representation
In String Data type in javascript we can enclosed both single quotes(' ') or Double quotes(" ") and after es6
they introduce template String enclosed with backstick (eg:let name=`Santhosh`)
*/
let name="Santhosh";// enclosed with double quotes

let lastName='sekar';//eclosed with single quotes


//boolean representation
 let isStart=true;
 let isFininshed=false;
 
 //undefined represent a variable that has not been assigned a value
 let x;
 console.log(x);

 //Null
// it represent a empty value value or delibrate non value
let emptyValue=null;

// symbol
 //it represent a unique ad immuatable identifier
 let uniqueSymbol=symbol('id');

 // Bigint
 // it is used to store whole number larger than largest number javaScript can reliably present with 
 //number type
 let bigNumber=123452346678861679363975769262956627593n;
 // Creating an object
const car = {
    brand: 'Toyota',//specify the value
    model: 'Corolla',
    year: 2024
};

// Accessing object properties
console.log(car.brand);  //to access the property of an object always using the object name
console.log(car['model']);  

// Adding a new property
car.color = 'blue';
console.log(car.color);  

// Modifying an existing property
car.year = 2025;
console.log(car.year);  

// Deleting a property
delete car.model;
console.log(car.model);  

// Creating an array
const numbers = [1, 2, 3, 4, 5];

// Accessing array elements
console.log(numbers[0]);  // 
console.log(numbers[4]);  // 

// Adding a new element
numbers.push(6);
console.log(numbers);  // print the entire array

// Modifying an element
numbers[2] = 10;
console.log(numbers);  // replace 3 with 10 in index 2 and print entire array

// Removing the last element
numbers.pop();
console.log(numbers);  
// Sunchronous demonstration 
console.log("start");
function function1(name)
{
    console.log($name);
    f2();

}
function f2()
{
    console.log("inside function f2");

}
function1('santhosh');
console.log('end');

// Asynchronous demonstarte
console.log('Start');

setTimeout(() => {
    console.log('Timeout callback');
}, 2000);  
console.log('End');


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success!');  // The promise is resolved
    }, 2000);  // 2 seconds delay
});

myPromise.then(result => {
    console.log(result);  // Logs 'Success!' after 2 seconds
}).catch(error => {
    console.error(error);  
});

const A = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success!');  // The promise is resolved
    }, 2000);  // 2 seconds delay
});

A.then(result => {
    console.log(result);  // Logs 'Success!' after 2 seconds
}).catch(error => {
    console.error(error);  // Logs error if the promise is rejected
});


console.log('Start');

new Promise((resolve) => {
    console.log('Promise Created');
    resolve('Promise Resolved');
}).then((message) => {
    console.log(message);
});

console.log('End');
// Function that returns a promise which resolves after 2 seconds
const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

// Async function that uses await to pause execution until the promise resolves
const asyncFunction = async () => {
    console.log('Start');

    await delay(2000); // Wait for 2 seconds

    console.log('After 2 seconds');

    return 'Done';
};

// Call the async function
asyncFunction().then(result => {
    console.log(result); // Logs 'Done' after 2 seconds
});
