//In JavaScript, function parameters are the variables listed as part of a function definition. They allow you to pass values into a function so that the function can perform operations based on those values.
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet('Alice'); // Outputs: Hello, Alice!
//default parameter
function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
  }
  
  greet();         // Outputs: Hello, Guest!
  greet('Alice');  // Outputs: Hello, Alice!

  function createGreeting(name = 'Guest', ...messages) {
    console.log(`Hello, ${name}!`);
    
    messages.forEach((message, index) => {
      console.log(`Message ${index + 1}: ${message}`);
    });
  }
  
  createGreeting('Alice', 'Welcome to the site!', 'Enjoy your stay.');
  /* Outputs:
     Hello, Alice!
     Message 1: Welcome to the site!
     Message 2: Enjoy your stay.
  */
  
