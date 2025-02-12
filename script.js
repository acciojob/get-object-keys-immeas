//your JS code here. If required.
const student = {
	name: "kwst",
	age: "25",
	city: "Daman",
};

function getkeys(obj) {
   return Object.keys(obj); // ✅ Corrected method
}

console.log(getkeys(student));
