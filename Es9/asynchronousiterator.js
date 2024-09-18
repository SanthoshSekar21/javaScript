//Asynchronous iterators are a key feature for handling data that isn't immediately available and can be especially useful in scenarios involving I/O operations, real-time data processing, or asynchronous data sources.
// Asynchronous generator function
async function* asyncGenerator() {
    const values = [1, 2, 3, 4, 5];
    for (const value of values) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate async operation
        yield value;
    }
}

// Using the asynchronous iterator
(async () => {
    for await (const value of asyncGenerator()) {
        console.log(value); // Outputs values 1 through 5 with a delay of 1 second each
    }
})();
