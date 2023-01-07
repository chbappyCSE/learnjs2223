/* 
 * JavaScript Function Definations 
 *
 * JavaScript functions are defined with the function keyword
 * You can use a function declaration or a function expression
 * 
 */

// Function Declarations

function functionName(perameters) {
    console.log("I am sleeping");
}

functionName();

// Self invoke
(function() {
    console.log("I am here!");
})();

// Function is a value
function myValue(a, b) {
    return a * b;
}
const result = myValue(3, 4);
console.log(result);
console.dir(myValue); // function are object

// Arrow Function
// ES5
var x = function(x, y) {
    return x * y;
};
// ES6
const x2 = (x, y) => x * y;
console.log(x2(3, 5));
const x3 = val => val; // shortcut for single value
console.log(x3(2));

// This keyword is not working arrow function


//