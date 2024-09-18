const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success!');  // The promise is resolved
    }, 2000);  // 2 seconds delay
});

myPromise.then(result => {
    console.log(result);  // Logs 'Success!' after 2 seconds
}).catch(error => {
    console.error(error);  // Logs error if the promise is rejected
});
