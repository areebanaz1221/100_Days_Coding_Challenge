
function divideAndRemainder(dividend: number, divisor: number): { quotient: number; remainder: number } {
    
    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor;

    return { quotient, remainder };
}


console.log(divideAndRemainder(13, 9)); // Shows { quotient: 1 , remainder: 4 }
