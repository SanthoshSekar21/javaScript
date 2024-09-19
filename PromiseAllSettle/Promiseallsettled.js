const promise1 = Promise.resolve('First promise resolved');
const promise2 = Promise.reject('Second promise rejected');
const promise3 = Promise.resolve('Third promise resolved');

Promise.allSettled([promise1, promise2, promise3])
    .then(results => {
        results.forEach((result, index) => {
            if (result.status === "fulfilled") {
                console.log(`Promise ${index + 1} fulfilled:`, result.value);
            } else {
                console.log(`Promise ${index + 1} rejected:`, result.reason);
            }
        });
    });
    const uploadFile = (file) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (file === 'file3.jpg') {
                    reject(`Error uploading ${file}`);
                } else {
                    resolve(`${file} uploaded successfully`);
                }
            }, 1000);
        });
    };
    
    const file1 = uploadFile('file1.jpg');
    const file2 = uploadFile('file2.jpg');
    const file3 = uploadFile('file3.jpg');
    
    Promise.allSettled([file1, file2, file3])
        .then(results => {
            results.forEach(result => {
                if (result.status === "fulfilled") {
                    console.log(result.value);
                } else {
                    console.log(result.reason);
                }
            });
        });
    