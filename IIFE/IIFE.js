//IIFE stands for Immediate Invoke Function Execution
//It is a function that is defined and executed after its creation.
//This pattern is used in javaScript t create new scope,allowing you to avois plluting the global namaspace and encapsulating variablbe
//-----------------syntax-----------------
//the syntax of an IIFE involves warpping a function inside a parantheses followed by another setof parantheses to invoke
(function f1()
{
    console.log('this is Immediate invoke');
})();
//---------usecase------
//         encapsulation the variable 
//         Avoid Gloabal Pollution
 //-------------using parameter----------
 ( function f2(name){
console.log(name)
  })('santhosh');


  const f3=((age)=>{
    console.log(age);
  })(21);

  const f4=(function(){
    let privatevar='Hi i am private variable';
    return{
        getprivatevar:(function()
        {
            return privatevar;
        })()

    } ;
  })();
  console.log(f4.getprivatevar);
  
