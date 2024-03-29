"use strict";
function multiplyDecimals(num1, num2) {
    return Math.round((num1 * num2) * 100) / 100;
}
console.log(multiplyDecimals(1.2, 2.3)); // Shows 0.02
