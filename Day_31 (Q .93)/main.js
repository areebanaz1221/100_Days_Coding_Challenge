"use strict";
// Replace..
function replaceBananaWithMango(fruits) {
    const index = fruits.indexOf("Banana");
    if (index !== -1)
        fruits[index] = "Kiwi", "Grapes";
}
const fruits = ["Apple", "Banana", "Cherry"];
replaceBananaWithMango(fruits);
console.log(fruits);
