"use strict";
// Callback function to filter even number
function filterEvenNumbers(number) {
    return number % 2 === 0;
}
// Function to filter an array based on a callback
function filterArray(array, callback) {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}
// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterArray(numbers, filterEvenNumbers);
console.log("Even numbers:", evenNumbers);
