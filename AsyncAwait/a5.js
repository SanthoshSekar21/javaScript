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
