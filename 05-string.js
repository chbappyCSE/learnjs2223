// Use scape carecter
/* let text = "We are the so-called \Vikings\ from the north.";
console.log(text);


let fruits = "Apple, Banana, Kiwi";
let banana = fruits.slice(7, 13);
console.log(banana);

let country = "I Love Bangladesh";
let changeCountry = country.replace("Bangladesh", "India");
console.log(changeCountry);

let x = country.length;
console.log(x); */

/* JS String Method */

// Replace Method

let favTeam = "I Support Brazil";
let argentina = favTeam.replace("Brazil", "Argentina");
console.log(argentina);

// String Converting Uppercase to Lowercase

let text1 = "hello Bangladesh";
console.log(text1.toUpperCase(), text1.toLowerCase());

// Concate Method
let text10 = "Hello";
let text11 = "World";
let text12 = text10.concat(" ", text11);
console.log(text12);

// String Search

// Tempate Literals ``

let myAttitude = `It's my Life 
My Rule's`;
console.log(myAttitude);

// Interpolation Process ${variableName}  also Expression Substitution ${m+n}
let countryName = 'Bangladesh';
let m = 17;
let n = 1;
// let sentance = 'I love' + countryName + ' and it is a big country';
let sentance = `I Love my ${countryName} and it's a big country. It's population is ${m+n} crore`;
console.log(sentance);