/* 
    JavaScript Declarations are Hoisted
    In JavaScript, a variable can be declared after it has been used.
    In other words; a variable can be used before it has been declared.
*/
// Only used var not let and const
x = 5;
console.log(x);
var x;

/* y = 6;
console.log(y);
let y; */
// VM353:1 Uncaught ReferenceError: Cannot access 'y' before initialization
//     at <anonymous>:1:3
// (anonymous) @ VM353:1
/* z = 6;
console.log(z);
const z; // syntax error */
// VM464:3 Uncaught SyntaxError: Missing initializer in const declaration
/* function A() {
    x = 5;
    console.log(x);
    let x;
}
A(); */