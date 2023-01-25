/**
 * Create a module shapes.js to calculate areas of various shapes.
   - square (public function) - makes use of Rectangle function to calculate area
   - rectangle (private function)
   - circle (public function)
   - PI (private variable)
   Make use of this module in another module (i.e. file)
 */
const Shapes = (function calculateArea() {
  const PI = 3.14;
  // private method
  function Rectangle(length, bredth) {
    return length * bredth;
  }

  const Shapes =  {
    // public method
    squareArea(length, bredth) {
      return Rectangle(length, bredth);
    },
    // public method
    circleArea(radius) {
      return PI * radius * radius;
    },
  };
  return Shapes;
})();

let findTheSquareArea = Shapes.squareArea(7, 9);
let findTheCircleArea = Shapes.circleArea(7);

console.log(findTheSquareArea);
console.log(findTheCircleArea);