"use strict";
// Tests for equality and inequality with strings
const str1 = "Hello";
const str2 = "hello";
console.log(str1 === str2); // false
console.log(str2 !== str2); // true
// Test using the lower case function
const text1 = "Hello World";
const text2 = "hello world";
console.log(text1.toLowerCase() === text2); //true
// Numerical tests involving equality and inequality, greater than and less than,greater than or equal to, and less than or equal to
const num1 = 10;
const num2 = 5;
console.log(num1 === num2); // false
console.log(num1 !== num2); // true
console.log(num1 > num2); // false
console.log(num1 < num2); // true
console.log(num1 >= num2); // false
console.log(num1 <= num2); // true
// Tests using "and" and "or" operators
const x = 5;
const y = 10;
const z = 15;
console.log(x < y && y < z); // true, both conditions are true
console.log(x < y || y > z); // true, at least one condition is true
console.log(x > y && y < z); // true, at least one condition is false
console.log(x > y || y > z); // true, at least one condition is false
// test wetheran item is in an array
const fruit = ['apple', 'banana', 'orange', 'grapes'];
console.log(fruit.includes('banana')); // true
console.log(fruit.includes('kiwi')); // false
// test wetheran item is not in an array
const colors = ['red', 'green', 'blue', 'yellow'];
console.log(!colors.includes('purple')); // true
console.log(!colors.includes('green')); // false
