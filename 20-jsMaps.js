/*  
 * A Map holds key - value pairs where the keys can be any datatype.
 * A Map remembers the original insertion order of the keys.
 * A Map has a property that represents the size of the map.
 * Passing an Array to new Map()
 * Create a Map and use Map.set()
 */

/* 
 * new Map 
 * You can create a Map by passing an Array to the new Map() constructor:\
 * Essensial Map Methods
 * 
 * new Map(), set(), get(), delete(), has(), forEach(), entries()
 * 
 * Property:    size    -   Returns the number of elements in Map
 */


// The new Map() Method Example
const fruits = new Map([
    ["apple", 500],
    ["banana", 300],
    ["orange", 200]
]);

console.log(fruits);

// Another way to use set() Method
const fruits1 = new Map();
fruits1.set("apple1", 500);
fruits1.set("banana1", 300);
fruits1.set("orange1", 200);

// The get() method gets the value of a key in Map:
let fruitsGet = fruits1.get("apple1");
console.log(fruitsGet);

// The size property returns the number of elements in a Map:
console.log(fruits1.size);

// The delete() Method - remove a Map element:
fruits.delete("orange")
console.log(fruits);

// The has() Method - returns true if a key exists in a Map:
let hasFruits = fruits.has("orange");
console.log(hasFruits);

// The forEach() Method - calls a function for each key/vale pair in a Map:
const studentInfo = new Map();
studentInfo.set("studentName", "Ch Bappy");
studentInfo.set("age", 25);
studentInfo.set("address", "Dhaka");

let text = "";
studentInfo.forEach(function(value, key) {
    text += key + ' = ' + value + ", ";
})
console.log(text);

// The entries() Method  returns an iterator object wth [key, value] in Map:
const teachersInfo = new Map([
    ["tname", "Bappy"],
    ["tage", 26],
    ["tsubjesc", "Computer"]
]);

let text1 = "";
for (const x of teachersInfo.entries()) {
    text1 += x + " ";
    console.log(x);
}
console.log(text1);