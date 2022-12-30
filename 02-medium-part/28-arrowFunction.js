/* 
// Normal Function
function myFun1() {
    return "Hello World!";
}

// Variable Function
hello = function() {
    return "Hello World!";
}

// Arrow Function 2 way
hello = () => {
    return "Hello World!";
}

// function jodi only statement value return kore tahole
hello = () => "Hello World!"; 

// If you have parameters, you pass them inside the prantheses:
hello = (val) => "Hello" + val;
    // const hello = (val) => "Hello" + val;
    // console.log(hello(" World!"));
*/

const hello = (val) => "Hello" + val;
console.log(hello(" World!"));

// If you have only one parameter, you can skip the parentheses as well:
const myName = val => "Ch" + " " + val;
console.log(myName("Bappy"));