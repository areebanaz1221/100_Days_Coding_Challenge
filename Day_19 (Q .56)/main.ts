// A mixed bag of items
let mixedArray = [1, "East" , "West", 3, "North", true, "South"];

// Picks out only the words
let stringsArray = mixedArray.filter(item => typeof item === "string");

// Shows the list of just words
console.log(stringsArray); // Output: ["East", "West", "North", "South"]

