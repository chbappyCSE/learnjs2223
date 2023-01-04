/*
 * A JavaScript Set is a collection of unique values
 * Each value can only occur once in a Set 
 * A Set can hold any value of any data type.
 */

const letters = new Set(["a", "b", "c", "a"]);
console.log(letters);

// Another way to create set
const letters2 = new Set();
letters2.add('a');
letters2.add('b');
letters2.add('c');
letters2.add('c');
console.log(letters2);

// forEach method
const letters3 = new Set(["a", "b", "c"]);
let text = "";
letters3.forEach(function(value) {
    text += value;
});
console.log(text);

// The values() Method

const lettersIterator = letters3.values();
for (let a of lettersIterator) {
    console.log(a);
}

// For a Set, instanceof Set returns true: