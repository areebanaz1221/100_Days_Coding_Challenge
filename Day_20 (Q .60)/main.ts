
let userProfile = (function() {
    
    let name = "Areeba";
    let age = 24;

    return {
        displayInfo: function() {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();


userProfile.displayInfo();