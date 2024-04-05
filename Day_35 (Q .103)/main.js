"use strict";
function getRandomBoolean() {
    return Math.random() > 0.5;
}
console.log(getRandomBoolean());
let trueValue = 0;
let falseVaalue = 0;
for (let i = 0; i < 100000; i++) {
    if (getRandomBoolean()) {
        trueValue++;
    }
    else {
        falseVaalue++;
    }
}
