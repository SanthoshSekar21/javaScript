console.log('Start');

// Synchronous blocking code
const blockForSeconds = (seconds) => {
    const end = Date.now() + seconds * 1000;
    while (Date.now() < end) {
        // This loop blocks the execution for the specified number of seconds
    }
};

// Blocking call
blockForSeconds(3); // Blocks for 3 seconds

console.log('End');
