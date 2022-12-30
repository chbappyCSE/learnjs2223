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
/* 

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
 */
/* class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sub(subj) {
        console.log(`${this.name} is a ${subj} student. And his age is ${this.age}.`);
    }
}
const student1 = new Student("Bappy", 25);
const student2 = new Student("Wasi", 35);
student1.sub("CSE");
student2.sub("Science"); */

// Another example
/* class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;

    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}
let myCar = new Car("Ford", 2014);
console.log(`My ${myCar.name} is ${myCar.age()} years old.`); */

// My age
/* class Ch {
    constructor(name, year) {
        this.name = name;
        this.year = year;

    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}
let myAge = new Ch("Bappy", 1997);
console.log(`${myAge.name} is ${myAge.age()} years old.`); */

// Another way
/* class My {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age(x) {
        return x - this.year;
    }
}

let date = new Date();
let year = date.getFullYear();

let bappyInfo = new My("CH Bappy", 2014);
console.log(bappyInfo.name) */

// class My {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
//     age(x) {
//         return x - this.year;
//     }
// }
// let date = new Date();
// let year = date.getFullYear();
// let myInfo = new My("Ch Bappy", 1996);
// console.log(`${myInfo.name} is ${myInfo.age(year)} years old.`);

class Candidate {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age(x) {
        return x - this.year;
    }
}
let date = new Date();
let year = date.getFullYear();
let candidateInfo = new Candidate("Alok Das", 1995);
console.log(`${candidateInfo.name} is ${candidateInfo.age(year)} years old`);