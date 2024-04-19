"use strict";
function sayHello() {
    console.log('Hello World!');
}
function add(num1, num2, callback) {
    console.log(num1 + num2);
    callback();
}
let a = 10;
let b = 20;
add(a, b, sayHello);
