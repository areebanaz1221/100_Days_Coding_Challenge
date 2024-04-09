"use strict";
function checkForCanada(map) {
    if (map.has("Canada")) {
        console.log(`The capital of Canada is ${map.get("Canada")}.`);
    }
    else {
        console.log("Canada is not found in the map.");
    }
}
// Example usage:
let countryCapitalMap = new Map();
countryCapitalMap.set("United States", "Washington, D.C.");
countryCapitalMap.set("United Kingdom", "London");
countryCapitalMap.set("France", "Paris");
checkForCanada(countryCapitalMap);
``;
