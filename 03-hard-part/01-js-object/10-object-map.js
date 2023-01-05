/* JavaScript Map:
 * Passing and Array to new Map()
 * Create a Map and use Map.set()
 * 
 * new Map()
 * Create a Map by Passing to the new Map() constructor
 * 
 * Example:
 */
// Create a Map 
const fruits = new Map([
    ['apple', 500],
    ['banana', 300],
    ['orange', 200]
]);


// Create a Map another way
const fruits2 = new Map();

// Set Map Values
fruits2.set('apple', 600);
fruits2.set('banana', 50);
fruits2.set('orange', 550);

// change existing Map values using set() method
fruits2.set('apple', 1000);

console.log(fruits2);

// get() method gets the value of a key in a Map:
console.log(fruits.get('apple'));

// size property return the number of elements in a Map:
console.log(fruits.size);

// delete() method remove a Map element:
console.log(fruits.delete('apple'));

// clear() method remove all the elements from a Map
console.log(fruits.clear());

// has() method returns true if a key exists in a Map
console.log(fruits2.has('orange'));

// Maps are Object
console.log(typeof fruits);
console.log(fruits instanceof Map);

// forEach() method invoks a callback for each key/value pair in a Map
// list all entries 
let text = "";
fruits2.forEach(function(value, key) {
    text += key + ' ' + value + ', ';
});
console.log(text);

// key() method returns an object will the keys in a Map:
// List all keys
let veggis = '';
for (const x of fruits2.keys()) {
    veggis += x + ' ';
}
console.log(veggis);

// values() method an iterator object with the values in a Map:
// Sum all vlues
let total = "";
for (const x of fruits2.values()) {
    total += x + ' ';
}
console.log(total);

// entries() method returns an iterator object with the [key, values] in a Map:
// List all entries
let text2 = "";
for (const x of fruits2.entries()) {
    text2 += x + ' ';
}
console.log(text2);