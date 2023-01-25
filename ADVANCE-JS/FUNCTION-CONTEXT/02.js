/**
 * 2. Declare a function sum that accepts 2 numbers x and y, and returns their sum.
      • Use bind() to create a new function where x is bound to 10, and the context is 
      unchanged. Call the bound function with a value for y, and log the result.
      • Use bind() to create a new function where x is bound to 10, and y to 20 (context is 
      unchanged). Call the bound function, and log the result.
 */

function sum(x, y) {
  return x + y;
}

const newFunc1 = sum.bind(this, 10);
console.log(newFunc(20));

const newFunc2 = sum.bind(this, 10, 20);
console.log(newFunc2());
