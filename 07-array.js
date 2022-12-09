const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars[1]);
// console.log(cars);
// document.getElementById('demo').innerHTML = cars - 1;
// console.log(typeof cars);

// const person = { firstName: "CH", lastName: " BAPPY", ages: 26 };
// let fullName = person.firstName + person.lastName;
// let personCount = person.length;

// let carsInfo = cars.length;
// Get Array Last Elements

/* cars[3] = "Honda";
console.log(cars[cars.length - 1]);

const fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple"];
let fLen = fruits.length;
let text = "<ul>"; */

/* for (i = 0; i < fLen; i++) {

    text += "<li>" + fruits[i] + "</li>";
} */


/* fruits.forEach(fruitsFunc);

text += "</ul>";

function fruitsFunc(value) {
    text += "<li>" + value + "</li>";
}

document.getElementById('demo').innerHTML = text; */


/* Add new elements in array */
// cars.push("Toyota");
// cars[cars.length] = "Toyota";
/* Create Undefind Hole */
// cars[6] = "Toyota";
// console.log(cars);

/* const students = ["Bappy", "Alok", "Wasi", "Moynul", "Ashraf", "Matiur"];


let text = "<ul style='list-style:none'>";
students.forEach(studentList);
text += "</ul>"

function studentList(value, index) {
    text += "<li>" + index + ": " + value + "</li>";
}
document.getElementById("stuList").innerHTML = text; */

const students = ["Bappy", "Alok", "Wasi", "Moynul", "Ashraf", "Matiur"];
/* push add element on array last */
// students.push("Mahmud");

/* pop remove element on array last */
// students.pop();

/* shift remove element on array first */
// students.shift();

/* unshift add element on array first */
// students.unshift("Saif");

/* changing element on array */
/* students[0] = "Sazib";

delete students[2]; */

/* Splice Method */
// first perameter defines the positions where new elements should be added and second parameter defines how manyelement should be removed.
// students.splice(2, 4, "Himu", "Hasan");

/* Slice method */
let newStudent = students.slice(1, 4);




/* console.log(students[students.length - 1]);
console.log(students.length);
console.log(students instanceof Array);
console.log(typeof students); */
console.log(newStudent);