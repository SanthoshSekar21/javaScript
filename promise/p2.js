// Create a new promise
const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation using setTimeout
    setTimeout(() => {
        resolve('Operation was successful!');
    }, 2000);  // 2 seconds delay
});

// Use .then() to handle the promise when it resolves
myPromise.then(result => {
    console.log(result);  // Logs 'Operation was successful!' after 2 seconds
}).catch(error => {
    console.error(error);  // Handles any error if the promise is rejected
});
