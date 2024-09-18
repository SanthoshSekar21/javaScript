const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Result 1');
    }, 1000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Result 2');
    }, 500);
});

Promise.race([promise1, promise2])
    .then(result => {
        console.log(result);  // Logs 'Result 2', as it resolves first
    })
    .catch(error => {
        console.error('Error:', error);
    });


