"use strict";
// Version 1 (runs the if block)
Object.defineProperty(exports, "__esModule", { value: true });
let alien_color = 'green';
if (alien_color === 'green') {
    console.log('Congratulations! You just earned 5 points for shooting the alien.');
}
else {
    console.log('Congratulations! You just earned 10 points for shooting the alien.');
}
// Version 2 (runs the else block)
alien_color = 'blue';
if (alien_color === 'green') {
    console.log('Congratulations! You just earned 5 points for shooting the alien.');
}
else {
    console.log('Congratulations! You just earned 10 points for shooting the alien.');
}
