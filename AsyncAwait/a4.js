// Function that returns a resolved promise
const getSimpleMessage = () => {
    return Promise.resolve('Hello, world!');
};

// Async function to handle the promise
const printMessage = async () => {
    const message = await getSimpleMessage(); // Wait for the promise to resolve
    console.log(message); // Logs 'Hello, world!'
};

// Call the async function
printMessage();
