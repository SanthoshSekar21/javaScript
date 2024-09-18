/*Closures are a fundamental concept in JavaScript that allows functions 
to access variables from their containing (or outer) scope, even after that outer function has finished executing. 
This powerful feature is used to create private variables, maintain state, and implement various design patterns.*/

//--what is closure-----
//A closure is created when a function is defined inside another function, and 
//the inner function retains access to the variables of the outer function. 
//Even after the outer function has returned, the inner function still has access to the outer function's variables.
function outerFunction() {
    let outerVariable = 'I am from outer function';

    function innerFunction() {
        console.log(outerVariable); // Inner function can access outerVariable
    }

    return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // Outputs: I am from outer function
//closures can be used to create private variables that are not accessible from outside the function:
function createCounter() {
    let count = 0; // Private variable

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // Outputs: 1
console.log(counter.increment()); // Outputs: 2
console.log(counter.getCount()); // Outputs: 2
console.log(counter.count); // Undefined (count is private)

