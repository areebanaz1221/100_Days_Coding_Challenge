// Arrays representing prices of two sets of laptops
const pricesSet1 = [900, 1500, 1200];
const pricesSet2 = [1300, 1250, 950];

// Combine the arrays using the spread operator
const combinedPrices = [...pricesSet1, ...pricesSet2];

// Sort the combined array in ascending order
combinedPrices.sort((a, b) => a - b);

// Log the sorted array
console.log(combinedPrices);

