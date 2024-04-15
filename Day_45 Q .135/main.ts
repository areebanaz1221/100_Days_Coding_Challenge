let person = {

    name: "Areeba",
    age: 23,


    address: {
    
      city: "Karachi",
      country: "Pakistan"
    
    }
 
};
  
  let formattedJsonString = JSON.stringify(person, null, 2); // Indentation with 2 spaces

  console.log(formattedJsonString);