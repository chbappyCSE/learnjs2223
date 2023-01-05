const person = {
    name: "John",
    age: 30,
    city: "New York"
};

/* Displaying Object Properties */
// document.getElementById("demo").innerHTML = person.name;


/* Displaying the Object in a Loop */
/* let txt = '';
for (let x in person) {
    txt += person[x] + "<br>";
}
document.getElementById("demo").innerHTML = txt; */


/* Using Object.values() */
/* const personArray = Object.values(person);
let txt = '';
for (x of personArray) {
    txt += personArray[x];
}
document.getElementById("demo").innerHTML = personArray; */


// Using JSON.stringify()
// console.log(JSON.stringify(person));
/* let myString = JSON.stringify(person);
document.getElementById("demo").innerHTML = myString; */

const person2 = {
        name: "Ch Bappy",
        age: 25,
        today: new Date()
    }
    /* let myAnotherString = JSON.stringify(person2);
    document.getElementById("demo").innerHTML = myAnotherString; */

// How to stringfy function 

const person3 = {
    name: "Ch Bappy",
    age: function() {
        return 30;
    }
};
// fist convert to string
person3.age = person3.age.toString();

let my2string = JSON.stringify(person3);
console.log(my2string);