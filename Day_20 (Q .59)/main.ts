// Add a Specific numbers
// 1 + 2 + 3 + 4 + 5 = 15
// var sum = 0;
// for (i = l;i <= 5; i++) {
//     sum = sum + i 
// }
// console.log(sum)
// sum of even number

var sum = 0;
for(var i = 0;i <= 100; i++) {
    if (i % 2 != 0) {
        sum = sum + i
    }
}

console.log(sum)