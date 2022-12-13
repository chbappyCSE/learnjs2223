// JS Break:
// The break statement "jumps out" of a loop.
let text1 = "";
for (let i = 0; i < 10; i++) {
    if (i === 5) { break; }
    text1 += "The number is " + i + "<br>";
}
console.log(text1)

// JS continue:
// The continue statement "jumps over" one iteration in the loop.
// A loop which will skip the step where i = value(5)
let text2 = "";
for (let i = 0; i < 10; i++) {
    if (i === 5) { break; }
    text2 += "The number is " + i + "<br>";
}
console.log(text2)


// JavaScript Labels
// The continue statement (with or without a label reference) can only be used to skip one loop iteration.

// The break statement, without a label reference, can only be used to jump out of a loop or a switch.

// With a label reference, the break statement can be used to jump out of any code block:
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text3 = "";

list: { // list: is label name
    text3 += cars[0] + "<br>";
    text3 += cars[1] + "<br>";
    break list; // break item
    text3 += cars[2] + "<br>";
    text3 += cars[3] + "<br>";
}
console.log(text3)