// Original function for calculating the area of a rectangle
function calculateArea(width: 6, height: 8): number {
    return width * height;
}

// Refactored into an arrow function
let calculateAreaArrow = (width: 6, height: 8): number => width * height;

// Example usage of the arrow function
console.log(calculateAreaArrow(6, 8)); // Logs the area of the rectangle