console.log('Start');

new Promise((resolve) => {
    console.log('Promise Created');
    resolve('Promise Resolved');
}).then((message) => {
    console.log(message);
});

console.log('End');
