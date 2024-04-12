"use strict";
const myObject = {
    name: "Areeba",
    age: 23,
    introduce: function () {
        return "My name is " + this.name + " and I am " + this.age + " years old.";
    }
};
console.log(myObject.introduce());
