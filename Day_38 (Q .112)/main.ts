// Create a Map to store country-capital pairs
let countryCapitalMap = new Map();

// Add countries and their capitals to the Map
countryCapitalMap.set("United States", "Washington, D.C.");
countryCapitalMap.set("United Kingdom", "London");
countryCapitalMap.set("France", "Paris");

// Display the map
console.log("Country-Capital Map:");
countryCapitalMap.forEach((capital, country) => {
    console.log(`${country} - ${capital}`);
});
