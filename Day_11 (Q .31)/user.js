"use strict";
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// non-empty array case
let userNames = ['Areeba', 'Khansa', 'Rabia', 'Zaid', 'Duraid'];
//functional case
function greetUsers(usernames) {
    if (usernames.length === 0) {
        console.log('We need to find some users!');
        return;
    }
    for (const usernames of userNames) {
        if (usernames.toLowerCase() === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        }
        else {
            console.log(`Hello ${usernames}, thank you for logging in again.`);
        }
    }
}
console.log(`For non empty user name:\n`);
greetUsers(userNames);
// to make array empty we just assign an empty array to userNames
userNames = [];
console.log(`\n\nfor empty userNames:\n`);
greetUsers(userNames);
