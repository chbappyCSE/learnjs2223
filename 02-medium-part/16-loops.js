/*
 * For loop statement
 * Statement 1: Initial
 * Statement 2: Condition checking
 * Statement 3: 
 *  
 */
const cars = ["A", "B", "C", "D", "E"];
let carsLn = cars.length;
for (i = 0; i < carsLn; i++) {
    console.log(cars[i]);
}


// for in loop

const person = { fname: "jhon", lname: "Doe", age: 25 };
for (let x in person) {
    console.log(person[x]);
}

// another way:
const numbers = [45, 5, 9, 16, 25];
for (let x in numbers) {
    console.log(numbers[x])
}


//For of looplet a = "Amiprobashi";
let a = "Amiprobashi";
for (let x of a) {
    console.log(x);
}
// Another way
let Nums = [40, 50, 5, 60, 30, 9, 100];
for (let y of Nums) {
    console.log(y);
}

// for -- init, condition, increment or decremtn
// While loop -- condition jodi main hoy init and increment and drecement jodi optional joy thaole while loop.

let texts = "";
let i = 0;
while (i < 10) {
    texts += "<br>The number is " + i;
    i++;
}
console.log(texts);

// Do while loop
let text = "";
let j = 0;
do {
    text += j + "<br>";
    j++;
}
while (j < 5);
console.log(text);