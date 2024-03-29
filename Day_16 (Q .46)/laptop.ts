
// Define the Laptop class

let laptop = {
    make: "Dell",
    model: "M4700",
    year: 2012,

    // Method to describe the laptop

    describe: function() {
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
    }
};
laptop.describe();

