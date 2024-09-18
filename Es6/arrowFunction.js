/*Arrow functions are a feature introduced in ECMAScript 6 (ES6)
 that provide a more concise syntax for writing function expressions. 
They also have some unique characteristics compared to regular functions.*/
const add = (a, b) => {
    return a + b;
  };
  //implict retrun
  const square = x => x * x;
  
  function Timer() {
    this.seconds = 0;
    
    setInterval(() => {
      this.seconds++;
      console.log(this.seconds);
    }, 1000);
  }
  
  new Timer(); // Will correctly log the incremented seconds
  