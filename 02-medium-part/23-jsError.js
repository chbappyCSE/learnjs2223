/* 
 * JavaScript Errors
 * Throw, and Try...Catch...Finally
 *  The try statement defines a code block to run (to try).

    The catch statement defines a code block to handle any error.

    The finally statement defines a code block to run regardless of the result.

    The throw statement defines a custom error.
 *  
 */

try {
    adddlert("Welcome guest!");
} catch (err) {
    console.log(err.message);
}

// JavaScript Throws Errors
// JavaScript will actually create an Error object with two properties: name and message

// The throw Statement - the throw statement allows you to create a custom error. Technically you can throe an exeption (throw an error). The exception can be a JavaScript String, a Number, a Boolean or an Object:

/* throw "Too big"; // throw a text
throw 500; // throw a number */

let x = 12;
try {
    if (x == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw {
        message: "Too High",
        name: "HighError"
    }
} catch (err) {
    console.log(err);
} finally {
    console.log("this is a test");
}