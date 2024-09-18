
//In programming, a class is like a blueprint for creating objects. 
//An object is an instance of a class. 
//Think of a class as a template, and objects as things you create using that template. 
//You define a class using the class keyword. Inside a class, you can define properties and methods (functions).
class Animal {
    // Constructor method
    constructor(name) {
      this.name = name; // Property
    }
  
    // Method
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  const dog = new Animal('Dog');
  dog.speak(); // Outputs: Dog makes a noise.
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  const person = new Person('Alice', 25);
  console.log(person.name); // Outputs: Alice
  console.log(person.age);  // Outputs: 25
      
  