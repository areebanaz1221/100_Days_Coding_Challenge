"use strict";
let multiply = (...params) => {
    return params.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
};
console.log(multiply(2, 3, 4));
console.log(multiply(5, 6, 7, 8));
