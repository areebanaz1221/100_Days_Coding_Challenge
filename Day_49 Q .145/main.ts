function sayHello() {
    console.log('Hello World!');
}

function add(num1: any, num2: any, callback: any) {
    console.log(num1 + num2);
    callback();
}

let a = 10;
let b = 20;

add (a, b, sayHello);