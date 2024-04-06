"use strict";
function isDivisibleBy2And3(number) {
    if (number % 2 === 0 && number % 3 === 0) {
        return true;
    }
    else {
        return false;
    }
}
// Example usage
let num = 12;
if (isDivisibleBy2And3(num)) {
    console.log(num + " is divisible by both 2 and 3.");
}
else {
    console.log(num + " is not divisible by both 2 and 3.");
}
