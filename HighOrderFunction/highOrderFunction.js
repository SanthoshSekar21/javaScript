/*higher-order functions are functions that either take one or more functions as arguments or return a function as a result.
 They are a key feature of functional programming and are used to create more abstract and reusable code.*/
 //function has argument
 const numbers = [1, 2, 3, 4, 5];

// Higher-order function that takes a function as an argument
const squaredNumbers = numbers.map(num => num * num);

console.log(squaredNumbers); // Outputs: [1, 4, 9, 16, 25]
//function has return value
function createMultiplier(multiplier) {
    return function(value) {
        return value * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Outputs: 10
console.log(triple(5)); // Outputs: 15
//Higher-order functions can also be used to compose functions. 
//Function composition is a technique where the output of one function becomes the input of another.
const compose = (f, g) => x => f(g(x));

const addOne = x => x + 1;
const square = x => x * x;

const addOneThenSquare = compose(square, addOne);

console.log(addOneThenSquare(3)); // Outputs: 16 (i.e., (3 + 1) * (3 + 1))
