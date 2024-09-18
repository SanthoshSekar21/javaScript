console.log('Start');

setImmediate(() => {
    console.log('Immediate callback');
});

setTimeout(() => {
    console.log('Timeout callback');
}, 0);  // Immediate but in a separate event loop phase

console.log('End');
