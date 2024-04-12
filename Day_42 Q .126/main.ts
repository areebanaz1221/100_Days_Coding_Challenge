const myObject = {
    name: "Areeba",
    method: function() {
      const nestedArrowFunction = () => {
        console.log(this.name);
      };
      nestedArrowFunction();
    }
  };
  
  myObject.method(); 
  