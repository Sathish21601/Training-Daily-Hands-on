function exponentFactory(x) {
    if(x===2) {
        return square;
    }
    else if(x===3) {
        return cube;
    }
    else {
        return x;
    }
    function square(x){
        return x*x;
    }
    function cube(x) {
        return x*x*x;
    }
    
}
let func1 = exponentFactory(2);
console.log(func1(5))
let func2 = exponentFactory(3);
console.log(func2(5));

