// Create a new promise
const mySimplePromise = new Promise((resolve) => {
    resolve('Simple Promise Resolved!');
});

// Handle the promise result
mySimplePromise.then((result) => {
    console.log(result);  // Logs 'Simple Promise Resolved!'
});
