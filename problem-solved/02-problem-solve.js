// sentence tite lorem koto bar use kora hoyeche & first koto number index a use kora hoyeche?
const sentance = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quis quas aperiam fuga nemo quaerat, magni dolores animi modi. lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, itaque? Obcaecati sapiente reiciendis autem repellat nemo possimus non eius ea molestias omnis dolorem, Lorem ipsum dolor sit amet. deleniti dignissimos illum, cumque vero nisi fugiat vitae? Voluptatum quae ullam quidem modi nisi obcaecati facere deleniti asperiores.";


// How many time use lorem
const sentenceMatches = sentance.match(/lorem/gi);
// jodi sentenceMatches true hoy tahole nibo sentenceMatches.length or 0 nibo;
const sentanceOcurances = sentenceMatches ? sentenceMatches.length : 0;
console.log(sentanceOcurances);


// Koto number position a lorem use kora hoheche hoyece
let sentancePosition = sentance.search(/lorem/i);
// jodi lorem na pawa jay
sentancePosition = sentancePosition >= 0 ? sentancePosition : "Not Found!";
console.log(sentancePosition);



/* Second Problem
 * Input: linear search(['a', 'b', 'c'], 'c')
 * Output: 2 or 'Not Found!'
 * Problem: linearSearch() function ti implement kore dekha.
 */

function linearSearch(arr, val) {
    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return "Not Found!";
}
let result1 = linearSearch(['a', 'b', 'c'], 'c');
console.log(result1);


/* Third problem 
 * Kono array theke sob theke boro string ta huje bar korte hobe and tar index number ta bar kora
 */
function longestString(names) {
    let longestWord = '';
    for (name of names) {
        if (name.length > longestWord.length) {
            longestWord = name;
        }
    }
    return [longestWord, names.indexOf(longestWord)];
}


console.log(longestString(['Bappy', 'Ashraf', 'Wasi', 'Momit', 'Abid', 'Matiur']));


/* Problem three
 * 1-100 projonto number gulu 3, 5 abong 3 o 5 uvoy number dara bivajjo 
 */

function fizzBuzz(number) {
    for (let i = 0; i <= number; i++) {
        if (i % 15 === 0) {
            console.log(`${i} is FizzBuzz`);
        } else if (i % 3 === 0) {
            console.log(`${i} is Fizz`);
        } else if (i % 5 === 0) {
            console.log(`${i} is Buzz`);
        } else {
            console.log(i);
        }
    }
}

// fizzBuzz(100);

/* Problem four
 * array theke falsy value and true value khuje bar kora
 */

const mixedArr = [
    "Ch",
    undefined,
    "Ch Bappy",
    false,
    "",
    "apple",
    40,
    "k",
    true,
    "Thanks all",
    NaN
];

/* const trueArray = mixedArr.filter(function(el) {
    if (el) {
        return true;
    } else {
        return false;
    }
}); */

// shortcut way
const trueArray = mixedArr.filter(Boolean);


console.log(trueArray);

/* Problem five
 * object theke falsy value bad deowa
 */

const obj = {
    a: "lws",
    b: undefined,
    c: "Ch Bappy",
    d: false,
    e: "",
    f: "apple",
    g: 40,
    h: "k",
    i: true,
    j: "Thank all",
    k: NaN
}

const truthyObject = function(obj) {
    for (let i in obj) {
        if (!obj[i]) {
            delete obj[i];
        }
    }
    return obj;
}

console.log(truthyObject(obj));