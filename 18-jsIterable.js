//Object is not iterable
const person = {
    fname: 'Ch',
    lname: 'Bappy'
}

// Array is iterable
const cars = [1, 2, 3, 4, 5];

//String is iterable
const name = "Bangladesh";
let text = "";
for (let x of name) {
    text += x + "<br>";
}
console.log(text);


//