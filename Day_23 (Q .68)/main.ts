
function multiplyDecimals(num1: number, num2: number): number {
    
    return Math.round((num1 * num2) * 100) / 100;
}


console.log(multiplyDecimals(1.2, 2.3)); // Shows 2.76
