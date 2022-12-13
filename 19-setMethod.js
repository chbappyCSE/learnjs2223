/*
 * A JavaScript Set is a collection of unique values.
 * Each value can only occur once in a Set.
 * Passing an Array to new Set()
 * Create a new Set and use add() to add values
 * Create a new Set and use add() to add variables
 * Size	== 	Returns the number of elements in a Set
 */

const lettrs = new Set(["a", "b", "c"]);
console.log(lettrs);

// Create a Set and add literal values: 
// If you add equal elements, only the first will be saved:
const letters1 = new Set();
letters1.add("a");
letters1.add("b");
letters1.add("c");
letters1.add("c");
letters1.add("c");
console.log(letters1);

// Create a Set and add variables:
const a = "a";
const b = "b";
const c = "c";

const letters2 = new Set();
letters2.add(a);
letters2.add(b);
letters2.add(c);

console.log(letters2);


// The forEach() method invokes a function for each Set element: forEach

const letters3 = new Set(["a", "b", "c"]);
let text = "";
letters3.forEach(function(value) {
    text += value;
});
console.log(text);

// The values() method returns an Iterator object containing all the values in a Set: for of
let text2 = "";
for (const x of letters3.values()) {
    text2 += x + "<br>";
}
console.log(text2);