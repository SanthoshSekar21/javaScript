//function declarations are hoisted entirely. This means you can call a function before its actual declaration in the code.
greet(); // Outputs: "Hello!"

function greet() {
    console.log("Hello!");
}
// Function expressions are not hoisted in the same way.
// If you try to use a function expression before it’s assigned, you will get an error.

sayHello(); // TypeError: sayHello is not a function

var sayHello = function() {
    console.log("Hello!");
};
