/* 
 * A regular expression is a sequence of characters that forms a search pattern.
 * Regular expressions can be used to perform all types of text search and text replace operations.
 * Stntax: /pattern/modifiers; 
 * Example: /w3schools/i;
 * 
 * In JavaScript, regular expressions are often used with the two string methods: search() and replace().
 */

// The search() method searches a string for a specified value and returens the position of the match:
// Using String search() With a String
let text1 = "Visit Bangladesh!";
let n1 = text1.search("Bangladesh");
console.log(n1);

// Using String search() With a Regular Expression
let n2 = text1.search(/bangladesh/i);
console.log(n2);

// Using String replae() With a String
let text2 = "I Love Canada!";
let textReplace = text2.replace("Canada", "Bangladesh");
console.log(textReplace);
// Usign String replace() With a Regular Expression
let textRegExpReplace = text2.replace(/canada/i, "Bangladesh");

console.log(textRegExpReplace);

/*
 * Regular Expression Modifier
 * i = case-insesative matching
 * g = global match (find all matches rather than stopping after the first match)
 * m = multiline matching
 *  
 */

let text3 = "I love India! and india is a very small country.";
let regExp_ig_emplement = text3.replace(/india/ig, "Bangladesh");
console.log(regExp_ig_emplement);


//