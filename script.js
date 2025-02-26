//your JS code here. If required.
const student = {
	name:"saurabh",
	age:29,
	city:"HU",
	
}

function getKeys(obj) {
	return Object.keys(obj)
}

const keys = getKeys(student)
console.log(keys)
