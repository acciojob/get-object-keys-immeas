//your JS code here. If required.
const student = {
	name: "John",
	age: "30",
	city: "New York",
};

function getkeys(obj) {
   return Object.keys(obj); // ✅ Corrected method
}

console.log(getkeys(student));
