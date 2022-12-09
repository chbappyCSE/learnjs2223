/* let fruits = ["Banana", "Apple", "Kiwi", "Pineapple", "Mango"];
fruits.sort();
fruits.reverse();
console.log(fruits);

let numbersort = [40, 100, 1, 5, 25, 10]; */
// console.log(numbersort.sort());

/* numbersort.sort(function(a, b) { return a - b }) */
// Randomly sort
// numbersort.sort(function(a, b) { return 0.5 - Math.random() })

// function numSort(a, b) {
//     return a - b
// }
// numbersort.sort(numSort);
/* console.log(numbersort); */

const cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2006 },
    { type: "BMW", year: 2010 }
];

cars.sort(function(a, b) { return a.year - b.year });
console.log(cars);