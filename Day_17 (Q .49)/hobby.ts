
// Defines a function that accepts multiple hobbies as arguments
function enjoyHobbies(...hobbies: string[]) {
    hobbies.forEach(hobby => {
        console.log(`I enjoy ${hobby}.`);
    });
}

// Example usage:
enjoyHobbies('reading', 'driving', 'coding');
