function logDayOfWeek(number: number) {
    switch(number) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid number. Please enter a number between 1 and 7.");
    }
}

logDayOfWeek(1); // Output: Sunday
logDayOfWeek(3); // Output: Tuesday
logDayOfWeek(6); // Output: Friday
logDayOfWeek(8); // Output: Invalid number. Please enter a number between 1 and 7.
