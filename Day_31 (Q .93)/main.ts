
// Replace..

function replaceBananaWithKiwi(fruits: string[]): void {
    
    const index = fruits.indexOf("Banana"); 
    
    if (index !== -1) fruits[index] = "Kiwi";
}


const fruits: string[] = ["Apple", "Banana", "Cherry"];

replaceBananaWithKiwi(fruits);
console.log(fruits); 