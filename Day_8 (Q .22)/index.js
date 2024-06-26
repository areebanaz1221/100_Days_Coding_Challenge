"use strict";
// Function to create a fruit object.
function createFruit(name, color, taste) {
    return {
        name,
        color,
        taste,
    };
}
// Create an array of fruits
const fruits = [
    createFruit("Apple", "Red", "Sweet"),
    createFruit("Banana", "Yellow", "Sweet"),
    createFruit("Orange", "Orange", "Citrusy"),
    createFruit("Grapes", "Purple/Green", "Sweet"),
    createFruit("Straeberry", "Red", "Sweet"),
];
// Access an invalid index
const invalidIndex = 10; // There are only 5 elements in the array, so this will cause an error
console.log(`Fruit at index ${invalidIndex}:`, fruits[invalidIndex]);
// Print the fruits
fruits.forEach((fruit) => {
    console.log(`Name: ${fruit.name}, Color: ${fruit.color}, Taste: ${fruit.taste}`);
});
