"use strict";
function areStringsIdenticalIgnoringCase(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
// Example usage
let string1 = "Hello";
let string2 = "hello";
if (areStringsIdenticalIgnoringCase(string1, string2)) {
    console.log("The strings are identical ignoring case.");
}
else {
    console.log("The strings are not identical ignoring case.");
}
