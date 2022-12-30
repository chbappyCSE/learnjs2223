// "use strict"; // Globally
// The "use script" Directive

x = 13;
console.log(x);

// Use strict mode in perticular scope like function

x = 3.14; // This will not cause an error.
myFunction();

function myFunction() {
    "use strict";
    y = 3.14; // This will cause an error
}