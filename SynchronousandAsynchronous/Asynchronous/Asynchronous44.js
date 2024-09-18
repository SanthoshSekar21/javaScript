const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved');
    }, 1500);  // 1.5 seconds delay
});

promise.then(result => {
    console.log(result);
});
