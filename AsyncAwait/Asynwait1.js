
// Function that returns a promise
const fetchGreeting = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hello, async/await!');
        }, 1000); // 1-second delay
    });
};

// Async function to handle the promise
const showGreeting = async () => {
    try {
        const greeting = await fetchGreeting(); // Wait for the promise to resolve
        console.log(greeting); // Logs 'Hello, async/await!'
    } catch (error) {
        console.error('Error:', error);
    }
};

// Call the async function
showGreeting();
