/*
 * JavaScript Classes
 * ECMAScript 2015, also knownas ES6, Intruduced JavaScript Classes
 * JavaScript Classes are templetes for JavaScript Objects. 
 */

// JavaScript Class Syntax
// Use the keyword class to create a calss
// Always add a method named constructor()
/* 
    class className {
        constructor() {... }
    }
 */

// Class property name, age
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

const car1 = new Car("Toyota", 2017); // create actual object
const car2 = new Car("BMW", 2018); // create actual object
const car3 = new Car("Suzuki", 2020); // create actual object

// Class method
class person {
    constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        // Class method
    play(status) { // parameter
        console.log(`${this.name} is playng ${status}`);
    }
}
const person1 = new person("Sakib", 35); // create actual object // also called instance
const person2 = new person("Tamim", 36); // create actual object

person1.play("Well");
person2.play("Good");