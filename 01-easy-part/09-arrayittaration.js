const numbers = [45, 5, 9, 16, 25];

// ****** Array forEach Method
/* function myFunction(value, index, array) {
    console.log(value);
    console.log(index);
    console.log(array);
    console.log("-------");
} */

/* numbers.forEach(myFunction); */

// ****** Array map Method == return new array

/* function myFunction(value) {
    return value * 2;
}

const newNumbers = numbers.map(myFunction);
console.log(newNumbers); */

// ****** Array filter Method
/* function myFunction(value) {
    return value > 10;
}

const newNumbers = numbers.filter(myFunction);
console.log(newNumbers); */


// ****** Array reduce Method
/* function myFunction(total, value, index, array) {
    console.log(total);
    console.log("------");
    return total + value;
}

const newNumbers = numbers.reduce(myFunction);
console.log(newNumbers); */

// ****** Array every Method & some method
/* function myFunction(value, index, array) {
    return value > 180;
}

// const newNumbers = numbers.every(myFunction);
const newNumbers = numbers.some(myFunction); */
// console.log(newNumbers);


// ****** Array array.indexOf Method & Array.includes method
/* const fruits = ["Apple", "Banana", "Apple", "Mango"];
let fruitsPositions = fruits.indexOf("Apple") + 1; // return 1
let fruitsLastPositions = fruits.lastIndexOf("Apple") + 1; // return 3
let fruitsInclude = fruits.includes("Apple"); // return true
console.log(fruitsInclude); */


// ****** Array Find Method and Find index 
/* function myFunction(value, index, array) {
    return value > 18;
}
// const newNumbers = numbers.find(myFunction);
const newNumbers = numbers.findIndex(myFunction);
console.log(newNumbers); */