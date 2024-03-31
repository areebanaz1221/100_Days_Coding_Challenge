// const number = '1234';

// console.log(number);

// const number = '1234.49';
// console.log(parseFloat(number));

// const number = '1,234,123';
// console.log(parseInt(number));

const number = '1,234,123'.replace(/,/g , '');
console.log(parseInt(number));