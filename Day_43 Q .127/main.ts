const traditionalFunction = function (a: number, b: number) {
    return a + b;
  };
  
  // Converted to arrow function
  const arrowFunction = (a: number, b: number) => a + b;
  
  console.log(traditionalFunction(8, 2));
  console.log(arrowFunction(8, 2));