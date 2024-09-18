console.log('start');
function f1()
{
    console.log('hi');

}

setTimeout(f2=> {
    console.log('hello');
},20000);
f1();
console.log('end');
