/* Number system 
    Decimal Base 10 = 0-9 (ex: 12, 123, 2345)
    Binary Base 2 = 0 & 1 (ex: )
    Octal Base 8 = 0-7
    Hexadecimal Base 16 = 1-9 A B C D E F


*/

/* let x = NaN;
let y = 10;
let z = x + y;
console.log(z);
 */

/* 
    Decimal to Binary Conversation (348)10 
    348 / 2 = 174 | Remainder = 0
    174 / 2 = 87 | Remainder = 0
    87 / 2 = 43 | Remainder = 1
    43 / 2 = 21 | Remainder = 1
    21 / 2 = 10 | Remainder = 1
    10 / 2 = 5 | Remainder = 0
    5 / 2 = 2 | Remainder = 1
    2 / 2 = 1 | Remainder = 0
    1 / 2 = 1 | Remainder = 1

    348 = 101011100 (Successive Division)


*/
/* 
    Decimal to Octal Conversation (348)8 
    348 / 8 = 43.5 | Remainder = 4
    43 / 8 = 5.375 | Remainder = 3
    5 / 8 = 0.625 | Remainder = 5
    

    348 = 534 (Successive Division)


*/
/* 
    Decimal to Octal Hexadecimal (348)16 
    348 / 16 = 21.75 | Remainder = 12
    21 / 16 = 1.3125 | Remainder = 5
    1 / 16 = 0 | Remainder = 1
    

    348 = 15C (Successive Division)


*/


/* Number Methode */
let a = 123;
let NewNum = a.toString();
console.log(typeof a);

let x = 9.656;
// let xx = x.toFixed(0);
let xx = x.toExponential(2);
console.log(xx);

/* Converting Variable to Number */
/* let ab = true;
let abn = Number(ab);
let ba = false;
let ban = Number(ba);
let abc = "10";
let abcn = Number(abc)

console.log(typeof abcn); */


// console.log(Number(ab));
// console.log(Number(ba));
// console.log(Number(ba));

/* toString Methods */

let numberOne = 20;
let numberOneC = numberOne.toString();
let numberTwo = 30;
let numberTwoC = numberTwo.toString();
console.log(numberOneC + numberTwoC);


let numOne = 9.560000000;
// let numOneConvertExponential = numOne.toExponential(4);
// for toExponential = after . number also e+0
let numOneConvertExponential = numOne.toExponential(4);
console.log(numOneConvertExponential);
// for toFixed = afert . number
let numOneConvertToFix = numOne.toFixed(0);
console.log(numOneConvertToFix);

// for toPrecision = total number
let numOneConvertToPrecision = numOne.toPrecision(4);
console.log(numOneConvertToPrecision);

// For Number Methode
let testDate = Number(new Date("2017-09-30"));
console.log(testDate);