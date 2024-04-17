"use strict";
// let count = 5;
// if (count > 0) {
//   console.log("Count is greater than 0.");
// }
// function add(a: any, b: any) {
//   return a + b;
// }
// Example of using let in a loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// i is not accessible here
// Example of using class to define a Person
class Person {
    constructor(name, age) {
        this.name = "Areeba";
        this.age = 23;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
const Areeba = new Person('Areeba', 23);
console.log(Areeba.greet());
// Example of using function to calculate the area of a rectangle
function calculateRectangleArea(width, height) {
    return width * height;
}
const area = calculateRectangleArea(5, 10);
console.log(`The area of the rectangle is: ${area}`);
