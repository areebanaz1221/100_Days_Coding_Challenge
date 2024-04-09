function evaluateExpression(expression: string) {
    switch (expression) {
        case 'A':
            console.log('Expression is A');
            break;
        case 'B':
            console.log('Expression is B');
            break;
        case 'C':
            console.log('Expression is C');
            break;
        default:
            console.log('Expression is not A, B, or C');
            break;
    }
}

evaluateExpression('B'); // Output: Expression is B
evaluateExpression('D'); // Output: Expression is not A, B, or C
