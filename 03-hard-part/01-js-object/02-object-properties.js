const person = {
    name: "Bappy",
    age: 25
};
/* console.log(person.age);
console.log(person['age']); */

let a = 'age';
// console.log(person[a]);

// JavaScript for ... in Loop
// The JavaScript for ... in statement through the properties of an object.

const person2 = {
    fname: " Ch",
    lname: " Bappy ",
    age: 25
};
// Add new property in object
person2.country = " Bangladesh ";
// Change Value
person2.age = 26;
// delete property
delete person2.age;
// for ... in loop in objects
let txt = '';
for (let x in person2) {
    // console.log(x);
    // txt = txt + person2[x];
    txt += person2[x];
}



// console.log(txt);

const myObj = {
    fname: " Ch",
    lname: " Bappy",
    age: 25,
    cars: [
        { name: "Ford", models: ["Fesista", "Focus", "Mastand"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ]
}
let xs = '';
for (let i in myObj.cars) {
    xs += myObj.cars[i].name;
    for (let j in myObj.cars[i].models) {
        xs += myObj.cars[i].models[j];
    }
}
// console.log(xs);
console.dir(myObj);