const myPromise = new Promise((resolve, reject) => {
    
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      resolve("Success!");
    } else {
      reject(new Error("Failure!")); 
    }
  });
  
  myPromise
    .then((result) => {
      console.log("Promise resolved:", result);
    })
    .catch((error) => {
      console.error("Promise rejected:", error.message);
    });
  