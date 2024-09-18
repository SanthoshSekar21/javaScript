//The call method allows you to invoke a function with a specified this value and individual arguments.
function f1(greeting) {
    console.log(greeting + ', ' + this.name);
}

const person = { name: 'santhosh',
    age:21
 };

f1.call(person, 'Hello'); // Outputs: Hello, Alice

const f2 ={
    sum:function(){
console.log(this.a+this.b);

    } 

};
const value={
b:10,
a:10
};
f2.sum.call(value);