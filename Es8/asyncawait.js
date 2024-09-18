// Function that returns a promise simulating a delay
const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data received!');
        }, 500); // 0.5-second delay
    });
};

// Async function to process the fetched data
const processData = async () => {
    try {
        const data = await fetchData(); // Wait for the promise to resolve
        console.log(data); // Logs 'Data received!'
    } catch (error) {
        console.error('Error:', error);
    }
};

// Call the async function
processData();
