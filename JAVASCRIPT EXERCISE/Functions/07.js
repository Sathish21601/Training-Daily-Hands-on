function sum(m,n,mat){
    const n1 = mat(m);
    const n2 = mat(n);
    return n1+n2;
  }
  function square(m) {
      return m*m;
  }
  function cube(n) {
      return n*n*n;
  }
  
  console.log(sum(2,3,square));
  console.log(sum(2,3,cube));
  
  function sumArray( arr, transform ) {
      let sum = 0;
  
      for( let i = 0; i < arr.length; i++ ) {
          sum += transform( arr[i] );
      }
  
      return sum;
  }
  console.log( sumArray( [ 1, 2, 3 ], square ) );
  console.log( sumArray( [ 1, 2, 3 ], cube) );
  
  