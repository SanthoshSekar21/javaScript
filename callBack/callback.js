console.log('start')
function f1(name,callback)
{
    console.log('dispalay name',name);
    callback();

}
function callback1()
{
console.log('call back is executed');
}
f1('santhosh',callback1);
console.log('end');