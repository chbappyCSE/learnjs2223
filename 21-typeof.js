/* 
 * In JavaScript there are 5 different data types that can contain values:
 * 1. string
 * 2. number
 * 3. boolean
 * 4. object
 * 5. function
 * 
 * There are 6 type of objects:
 * 1. Object
 * 2. Date
 * 3. Array
 * 4. String
 * 5. Number
 * 6. Boolean
 * 
 * And 2 data types that cannot contain values:
 * 1. null
 * 2. undefined
 */

/*
 * The typeof Operator - to fond the data type of JavaScript variable.
 * Example
 */
/* console.log(typeof "Jhon");
console.log(typeof 3.14);
console.log(typeof NaN);
console.log(typeof false);
console.log(typeof [1, 2, 3, 4]);
console.log(typeof { name: 'jhon', age: 25 });
console.log(typeof new Date());
console.log(typeof
    function() {});
console.log(typeof myCar);
console.log(typeof null); */

function isArray(myArray) {
    console.log(myArray.constructor.toString().indexOf('Array') > -1);
}
isArray([1, 2, 3]);


/*
 *** JavaScript Type Conversion ***
 *
 * Converting Strings to Numbers
 * Converting Numbers to Strings
 * Converting Dates to Numbers
 * Converting Numbers to Dates
 * Converting Booleans to Numbers
 * Converting Numbers to Booleans
 */

/* Empty string contvert Number() return 0 */
let myString = "";
let myNumber = Number(myString);
console.log(myNumber);

/* parseFloat() - Parses a string and returns a floating point number  && Parses a string and returns an integer */
let myString2 = "3.2";
let myNumber2 = parseFloat(myString2);
let myNumber3 = parseInt(myString2);
console.log(myNumber2);
console.log(myNumber3);

/* Converting Numbers to Strings */
let num10 = 100;
let numToString = String(num10);
let anotherNumToString = num10.toString();
console.log(numToString);
console.log(anotherNumToString);

/* More Methods */
let num11 = 10e6;
let convertToExponential = num11.toExponential();
console.log(convertToExponential);

let num12 = 10.5456789;
let convertToFIxed = num12.toFixed();
console.log(convertToFIxed);

let num13 = 10.345678;
let convertToPrecision = num13.toPrecision(4);
console.log(convertToPrecision);

/* Converting Dates to Numbers */
let dates = new Date();
let convertDateToNumber = Number(dates);
let NewDate = dates.getTime(); // another way
let convertDateToString = String(convertDateToNumber);
console.log(convertDateToString);

/* Converting Booleans to Numbers */
let trueCheck = Number(true);
let falseCheck = Number(false);
console.log(falseCheck);