// Example of using let in a loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// i is not accessible here
// Example of using class to define a Person
class Person {
    name: "Areeba";
    age: 23;
    constructor(name: string, age: number) {
        this.name = "Areeba";
        this.age = 23;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const Areeba = new Person('Areeba', 23);
console.log(Areeba.greet());

function calculateRectangleArea(width: number, height: number) {
    return width * height;
}

const area = calculateRectangleArea(5, 10);
console.log(`The area of the rectangle is: ${area}`);
