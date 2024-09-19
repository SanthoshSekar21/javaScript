// Promise.race() is a method in JavaScript that runs multiple Promises concurrently and 
// returns the result of the first Promise that settles, whether it resolves or rejects. 
// This method is useful when you are concerned about which Promise finishes first, regardless of success or failure.
const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, 'Promise 1 resolved'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 500, 'Promise 2 resolved'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 2000, 'Promise 3 resolved'));

Promise.race([promise1, promise2, promise3])
    .then(result => {
        console.log('First settled promise:', result);
    });

    
    const promise4 = new Promise((resolve) => setTimeout(resolve, 1000, 'Promise 4 resolved'));
    const promise5= new Promise((_, reject) => setTimeout(reject, 500, 'Promise 5 rejected' ));
    
    Promise.race([promise1, promise2])
        .then(result => {
            console.log('First settled promise:', result);
        })
        .catch(error => {
            console.error('First rejected promise:', error);
        });
    