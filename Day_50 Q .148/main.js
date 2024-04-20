"use strict";
// Define a function to be executed after a delay
function greet() {
    console.log("Hello! This message was delayed by 2 seconds.");
}
// Call setTimeout() with the function and delay
setTimeout(greet, 2000); // 2000 milliseconds = 2 seconds
// Execute an anonymous function after a delay
setTimeout(function () {
    console.log("This message was delayed by 3 seconds.");
}, 3000); // 3000 milliseconds = 3 seconds
