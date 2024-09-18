console.log('start');
function f1()
{
    console.log('hi');

}
function f2()
{
    return "hello";
}
setTimeout(f1(),2000);
let x=f2();
console.log(x);
