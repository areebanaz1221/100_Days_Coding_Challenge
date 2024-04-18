"use strict";
const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
        resolve("Success!"); // Resolve the promise
    }
    else {
        reject(new Error("Failure!")); // Reject the promise
    }
});
myPromise
    .then((result) => {
    console.log("Promise resolved:", result);
})
    .catch((error) => {
    console.error("Promise rejected:", error.message);
});
