// //const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hi, I am resolved inside a promise');
//     }, 3000);
    
//     // `reject` is not supposed to be outside, because if `reject` is called before `resolve`, the promise is rejected immediately.
//     // Uncomment the line below if you want to test rejection manually.
//     // reject('Error occurred before timeout');
// });

// myPromise.then(result => {
//     console.log(result);
//     console.log('Executed the promise');
// }).catch(err => {
//     console.error(err);
// });*/
 
// const data=new Promise((res,rej)=>{
// function getUserDetail(user){
// const getDetail=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         this.user=user;
//         if(user)
//         {
//             res('user find  user name',user);
//         }else{
//             rej(new Error('no user'));
//         }
//     },5000);
// });
// };});
//  data.then((santhosh)=>{
//     getUserDetail.then(res=>{
//         console.log(res);
//     })
//  }).catch(er=>{
//     console.log(er);
//  }).finally(finished=>{
//     console.log(finished);
//  });



const uploadFile = (file) => {
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous upload with setTimeout
        setTimeout(() => {
            console.log(`Uploaded file: ${file}`);
            resolve(file);
        }, 1000);
    });
};

const file1 = uploadFile('file1.jpg');
const file2 = uploadFile('file2.jpg');
const file3 = uploadFile('file3.jpg');

Promise.all([file1, file2, file3])
    .then(results => {
        console.log('All files uploaded successfully:', results);
    })
    .catch(error => {
        console.error('File upload error:', error);
    });
