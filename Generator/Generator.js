/* generators are a special type of function that can be paused and resumed, 
allowing you to manage the flow of data in a more controlled manner. They are particularly useful for 
tasks that require asynchronous programming, handling sequences of values, or creating iterable objects.*/
function* countUpTo(max) {
    let count = 1;
    while (count <= max) {
        yield count; // Pause execution and return the current count
        count++;
    }
}

const counter = countUpTo(5); // Create a generator instance

console.log(counter.next()); // { value: 1, done: false }
console.log(counter.next()); // { value: 2, done: false }
console.log(counter.next()); // { value: 3, done: false }
console.log(counter.next()); // { value: 4, done: false }
console.log(counter.next()); // { value: 5, done: false }
console.log(counter.next()); // { value: undefined, done: true }*/
//Asynchronous
function* f1() {
    const a = yield new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hi this resolved');
        }, 2000);
    });
    console.log(a);
}

// Create an instance of the generator
const b = f1();

// Get the first promise from the generator
const promise = b.next().value; // Use .value to get the yielded promise

// Handle the promise
promise
    .then(result => {
        console.log(result); // Outputs: hi this resolved
        return b.next(result); // Pass the result back into the generator
    })
    .catch(err => {
        console.error(err);
    });
