// Create the student object
const student = {
	name: "John",
	age: "30",
	city: "New York",
};

// Function to get all keys from the object
function getKeys(obj) {
   return Object.keys(obj); // ✅ Correct method
}

// Testing the function
console.log(getKeys(student)); // Output: ["name", "age", "city"]
