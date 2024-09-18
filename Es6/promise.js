const myPromise=new Promise((resolve,reject) =>{
setTimeout(()=>{
    resolve('this is resolve');
},2000);

});
myPromise.then(result=>{
    console.log(result);

}).catch(error => {
    console.error(error);
});
