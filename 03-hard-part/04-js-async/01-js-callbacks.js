// normal dependent function
function display(some) {
    console.log(some);
}

function calculator(num1, num2) {
    let sum = num1 + num2;
    // return sum;
    display(sum); // another way
}

calculator(5, 5); // another way
/* let result = calculator(5, 5);
display(result); */

// callback function

function display1(some1) {
    console.log(some1);
}

function calculator1(num11, num22, callback) {
    let sum1 = num11 + num22;
    if (callback) callback(sum1);
    return sum1;
}
// const result = calculator1(5, 5);
const result = calculator1(5, 5, display); // callback
console.log(result);