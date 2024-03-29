// Store the locations in a array. Make sure the array is not in alphabetical order.

let travelDestinations :string[] = ['Makkah', 'Madinah Munawra', 'Saif ul mulk', 'Naran Kagan', 'Maree'];

//Step 2:
console.log("Orignal Order:")
console.log(travelDestinations)

//Step 3: Print your array in alphabetical order without modifying the actual list.
console.log("\n Alphabetical order without modifying the actual list")
console.log([...travelDestinations].sort())

//Step 4: Showing array is still in its original order.
console.log("\n Showing array is still in its original order")
console.log(travelDestinations)

//Step 5: Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\n Reverse Alphabetical order without modifying the actual list")
console.log([...travelDestinations].sort().reverse())

//Step 6: Showing array is still in its original order.
console.log("\n Showing array is still in its original order")
console.log(travelDestinations)

//Step 7: Reverse the order of your list. Print the array to show that its order has changed.
console.log("\n Reverse Order")
travelDestinations.reverse()
console.log(travelDestinations)

//Step 8: Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\n Back to Order")
travelDestinations.reverse()
console.log(travelDestinations)

//Step 9: Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\n Change to Alphabetic Order")
travelDestinations.sort()
console.log(travelDestinations)

//Step 10: Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\n Change to Reverse Alphabetic Order")
travelDestinations.sort().reverse()
console.log(travelDestinations)