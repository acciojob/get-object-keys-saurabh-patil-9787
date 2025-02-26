const student = {
	name:"saurabh",
	age:29,
	city:"HU",
	getKeys: function() {
		return Object.keys(this);
	}
}

const keys = student.getKeys()
console.log(keys)
