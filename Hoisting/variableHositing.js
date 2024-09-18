/*JavaScript hoists variable declarations to the top of their scope, but not their initializations. 
This means that variables can be used before they are declared, 
but they will have the value undefined until the declaration is executed.*/
console.log(x); // Outputs: undefined
var x = 5;
console.log(x); // Outputs: 5
 // the above code is implicitly seen as
 var x;
console.log(x); // Outputs: undefined
x = 5;
console.log(x); // Outputs: 5
//let and const declarations are also hoisted, but they are not initialized until their actual declaration is evaluated.
// Accessing them before the declaration will result in a ReferenceError due to the Temporal Dead Zone (TDZ).
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;


