"use strict";
const traditionalFunction = function (a, b) {
    return a + b;
};
// Converted to arrow function
const arrowFunction = (a, b) => a + b;
console.log(traditionalFunction(8, 2));
console.log(arrowFunction(8, 2));
