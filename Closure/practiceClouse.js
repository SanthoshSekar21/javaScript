const f1=(a,b)=>
{
    let sum=a+b;
    const f2=()=>{
        return sum;
    };
    return first2()
};
let result=f1(1,2);
console.log(result);
