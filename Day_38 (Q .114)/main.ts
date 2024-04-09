// Creating a Map of student IDs and names
const studentMap = new Map();
studentMap.set(1, "Rabia");
studentMap.set(2, "Khansa");
studentMap.set(3, "Areeba");
studentMap.set(4, "Zaid");
studentMap.set(5, "Duraid");


studentMap.forEach((name, id) => {
  console.log(`Student ID: ${id}, Name: ${name}`);
});
