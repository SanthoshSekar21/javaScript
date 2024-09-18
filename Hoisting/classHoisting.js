//Classes are not hoisted. Trying to use a class before it is declared will result in a ReferenceError
const instance = new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization

class MyClass {
    constructor() {
        console.log("Class created!");
    }
}
