"use strict";
const helloPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello, World!");
    }, 2000);
});
helloPromise.then((result) => {
    console.log(result);
});
