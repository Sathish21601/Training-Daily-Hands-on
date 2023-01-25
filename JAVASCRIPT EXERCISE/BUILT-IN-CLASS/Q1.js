const numbers1 = [5, 11, 13, 7, 2, 31, 3, 19, 23, 17, 29];
const numbers2 = [5, 11, 13, 7, 2, 31, 3, 19, 23, 17, 29];
const numbers3 = [5, 11, 13, 7, 2, 31, 3, 19, 23, 17, 29];
const numbers4 = [5, 11, 13, 7, 2, 31, 3, 19, 23, 17, 29];
const numbers5 = [5, 11, 13, 7, 2, 31, 3, 19, 23, 17, 29];
const numbers6 = [5, 11, 13, 7, 2, 31, 3, 19, 23, 17, 29];
const numbers7 = [5, 11, 13, 7, 2, 31, 3, 19, 23, 17, 29];

numbers1.sort(function (a, b) {
  return a - b;
});
numbers2.sort(function (a, b) {
  return b - a;
});
numbers3.push(37);
numbers4.pop();
numbers5.splice(4, 5, 7, 11);
let index1 = numbers6.indexOf(23);
let index2 = numbers7.indexOf(41);

console.log(numbers1);
console.log(numbers2);
console.log(numbers3);
console.log(numbers4);
console.log(numbers5);
console.log(numbers6);
console.log(numbers7);
