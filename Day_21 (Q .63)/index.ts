
type Shape = {
    kind: "circle" | "square";
    radius?: number; // Only for circle
    width?: number; // Only for square
    height?: number; // Only for square
};

// Describing a circle using our Shape type
let circle: Shape = {
    kind: "circle",
    radius: 5
};

// Describing a square using our Shape type
let square: Shape = {
    kind: "square",
    width: 15,
    height: 15
};


console.log(circle);
console.log(square); 