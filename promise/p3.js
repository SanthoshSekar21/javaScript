// Create a new promise that resolves immediately
const simplePromise = new Promise((resolve) => {
    resolve('Hello, Promise!');
});

// Handle the resolved value
simplePromise.then((message) => {
    console.log(message);  // Logs 'Hello, Promise!'
});
