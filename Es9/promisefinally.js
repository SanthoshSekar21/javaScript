//the part os promise that will be excuted later whether it succeeds(.the()) or fails(.catch())
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Success!'), 1000);
});

promise
    .then(result => {
        console.log(result); // Outputs: 'Success!'
    })
    .finally(() => {
        console.log('Cleanup code'); // This will execute after the promise is settled
    });
