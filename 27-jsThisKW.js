// Example
// "use strict";
const person = {
    firstName: "Ch",
    lastName: "Bappy",
    id: 5566,
    fullName: function() {
        // "use strict";
        return this.firstName + " " + this.lastName;
    },
    getFullName: function() {
        // "use strict";
        // Emplecit binding
        return this.fullName();
    }
};

console.log(person.getFullName());

/* 
 * What is this?
 * The JavaScript this keyword refers to the object it belongs to.
 * Which object depends on how this is being invoked (used or called).
 * It has different values depending on where it is used:
 * The this keyword refers to different objects depending on how it is used:
 *  In an object method, this refers to the object.
    Alone, this refers to the global object.
    In a function, this refers to the global object.
    In a function, in strict mode, this is undefined.
    In an event, this refers to the element that received the event.
    Methods like call(), apply(), and bind() can refer this to any object.
 *
 *
 */

// Explecit buinding

const person2 = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

const person3 = {
    firstName: "Mr",
    lastName: "Akash",
}

let myName = person2.fullName.call(person3);
console.log(myName);