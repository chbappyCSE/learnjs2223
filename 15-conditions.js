// JS Condition
/* 
let age = 18;
if (age >= 18) {
    console.log("You're adult");
} */

// JS Comparism 
/* 
 * Logical Operator
 * if age (age >= 18){
 *      
 * }
 * Ternary operator
 */
/* let age = 35;
// console.log(age >= 18 ? "You are adult" : "You are not adult");
console.log((age >= 18) ? (age < 30) ? "You are an adult" : "You are old" : "You are young"); */


/* 
 * NaN checking
 *
 *

*/
/* let personAge = "sdfd";
personAge = Number(personAge);
if (isNaN(personAge)) {
    console.log("Input is not a number");
} else {
    console.log(personAge < 18 ? "Too young" : "Old enough");
} */

let age = 19;
if (age < 18) {
    console.log("You are too young!");
} else if (age == 18) {
    console.log("Welcome to adult world!");
} else if (age > 18 && age < 30) {
    console.log("You are matured!");
} else {
    console.log("You are old");
}

/* 
 *  Switch 
 *  
 *
 */