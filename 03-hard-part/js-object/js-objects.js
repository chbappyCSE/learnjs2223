/* In JavaScript, Objects are King. If you understand onjects, you understand JavaScrpt. 
 * 
 * !JavaScript "Object" and "Object Oriented Programming" language object are not same.
 * 
 * In JavaScript, almost "everything" is an Object.
 * # Booleans can be objects (if defined with "new" keyword)
 * # Number can be objects (if defined with "new" keyword)
 * # String can be objects (if defined with "new" keyword)
 * # Dates are always objects
 * # Maths are always objects
 * # Regular expression are always objects
 * # Arrays are always objects
 * # Functions are always objects
 * # Objects are always objects
 * 
 * All JavaScript vlues, except primitives, are objects.
 * JavaScript Primitives
 * A "primitives value" in a vlue that has no properties or method
 * A "primitives data type" is data that has a primitive value.
 * JavaScript Defines 5 type of primitive data types:
 * # string
 * # number
 * # boolean
 * # null
 * # undefined
 * 
 * Primitive values are immutable (they are hardcoded and therefore cannot be changed).
 * 
 */

// Objects
const person = {
    firstName: "Jhon",
    lastName: "Doe",
    age: 50
}

// Also create empty objects:
const person2 = {};
person2.firstName = "Josim";
person2.lastName = "Doe";
person2.age = 35;
person2.eyeColor = "blue";

// JavaScript objects are muteable
const person3 = {
    name: "CH",
    surname: "Bappy",
    age: 20,
    getFullName: function() {
        return this.name + " " + this.surname;
    }
};
const person4 = person3;
person3.age = 25;
console.log(person3.getFullName());
console.log(person3.age);