"use strict";
const myObject = {
    name: "Areeba",
    getName: function () {
        return this.name;
    }
};
console.log(myObject.getName());
