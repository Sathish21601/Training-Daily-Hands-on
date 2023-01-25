/**
 * 1. Declare a function foo and log its context
      • Use bind() to create a new function where the context is the object { x: 1 } instead
      • Call the bound function
*/

function foo() {
  console.log(this);
}

foo();
const newFunc = foo.bind({ x: 1 });
newFunc();
