const person = {
    firstName: "Ch",
    lastName: "Bappy",
    id: 223344,
    fullName: function() {
        return (this.firstName + " " + this.lastName).toUpperCase(); //use builtin function
    }
}

// add properties
person.age = 25;

// method create in object outsize
/* person.fullName = function() {
    return this.firstName + " " + this.lastName;
} */

// access js object method
console.log(person.fullName());
// console.log(person);