// // // Promise.any() is a relatively new method in JavaScript (introduced in ES2021/ES12)
// //  that provides a way to handle multiple Promises concurrently,but with a different focus compared to Promise.all()
// //   or Promise.allSettled().
// Promise.any() resolves when any one of the input Promises is fulfilled. 
// It ignores any rejected Promises, and the returned Promise is resolved with the value of the first successfully resolved
//  Promise. If all the Promises reject, 
// it rejects with an AggregateError, which is a special error type that holds all the rejection reasons.
const promise1 = new Promise((resolve, reject) => setTimeout(reject, 1000, 'Promise 1 rejected'));
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Promise 2 resolved'));
const promise3 = new Promise((resolve, reject) =>   setTimeout(resolve, 1500, 'Promise 3 resolved'));

Promise.any([promise1, promise2, promise3])
    .then(result => {
        console.log('First fulfilled Promise:', result);
    })
    .catch(error => {
        console.error('All promises were rejected:', error.errors);
    });

    // The AggregateError object is a special error that Promise.any() 
    // uses to return all the rejection reasons when all Promises fail.
    //  It's similar to a regular JavaScript error, but it contains an array of individual errors.


    //  You can access the array of rejection reasons through the .errors property of the AggregateError.