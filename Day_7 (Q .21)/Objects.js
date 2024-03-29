"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bouquet = {
    name: "Spring Delight",
    price: 250,
    description: "Beautiful arrangment of spring flowers"
};
// define an array of objects
let bouquets = [];
// pushing multipul objest
bouquets.push(bouquet);
// pushing multipul object
bouquets.push(bouquet);
bouquets.push({
    name: "Summer bliss",
    price: 350,
    description: "Beautiful arrangement of summer flowers"
});
let bouquet3 = {
    name: "Red Hot",
    price: 350,
    description: "beautiful arrangement of red roses"
};
bouquets.push(bouquet3);
// console.log(bouquets);
bouquets.push({ name: "Freshness", price: 250, description: "A beautiful arrangement of white and yellow roses" });
// console.log(bouquets);
// function to display bouquets.
function displayBouquets(bouquets) {
    for (let i of bouquets) {
        console.log(`
        title: ${i.name}
        description:${i.description}
        price:${i.price}
        ______________\n`);
    }
}
displayBouquets(bouquets);
