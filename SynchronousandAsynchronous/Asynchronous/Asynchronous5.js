const intervalId = setInterval(() => {
    console.log('Repeated every 1 second');
}, 1000);  // 1 second interval

// Stop the interval after 3 seconds
setTimeout(() => {
    clearInterval(intervalId);
    console.log('Interval cleared');
}, 3000);
