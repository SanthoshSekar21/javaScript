// Function that returns a promise
const getMessage = () => {
    return new Promise((resolve) => {
        resolve('Hello from async/await!');
    });
};

// Async function to handle the promise
const displayMessage = async () => {
    const message = await getMessage(); // Wait for the promise to resolve
    console.log(message); // Logs 'Hello from async/await!'
};

// Call the async function
displayMessage();

