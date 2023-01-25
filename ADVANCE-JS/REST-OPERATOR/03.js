/**
 * Write a function _sum_ that calculates and returns the sum of arguments (assume all 
   arguments are numbers) passed to it, and call it like so. Use a rest parameter to implement 
   this. 
 * var result = sum( 1, 2, 3, 4 );
   console.log( result ); // prints 10
 * var result = sum( 1, 2, 3, 4, 5 );
   console.log( result ); // prints 15
*/

const sum = (...args) => {
  let sum = 0;

  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }

  return sum;
};

console.log(sum(1, 2, 3, 4)); // 10
console.log(sum(1, 2, 3, 4, 5)); // 15
