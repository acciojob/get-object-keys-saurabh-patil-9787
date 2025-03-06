// Create the student object with a name property
const student = {
    name: "John Doe"
};

// Another student object with multiple properties
const student2 = {
    name: "Alice",
    age: 25,
    city: "New York"
};

// Function to get the keys of an object
const displayKeys = document.getElementById('keys')
function getKeys(obj) {
    return Object.keys(obj);
}
displayKeys.innerText = getKeys(student) +" " + getKeys(student2)
// Testing the function
// console.log(getKeys(student));  // Output: ["name"]
// console.log(getKeys(student2)); // Output: ["name", "age", "city"]
