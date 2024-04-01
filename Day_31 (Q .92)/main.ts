
function removeLastElement<T>(arr: T[]): T | undefined {
    return arr.pop(); 
}


const fruits: string[] = ["Apple", "Banana", "Cherry", "Grapes", "Kiwi"];
console.log(removeLastElement(fruits)); 
console.log(fruits);