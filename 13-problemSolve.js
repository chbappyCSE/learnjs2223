// Randomly print 1 to 6:

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomNumber(1, 6));

// Rearrange Student Name Alphabetically

const studentsName = ["Moynul", "Ashraf", "Bappy", "Matiur", "Wasi", "Hasan"];
console.log(studentsName.sort());

// Rearrange Student Roll

const rollNumber = [3, 5, 1, 6, 9, 4];
console.log(rollNumber.sort(function(a, b) { return a - b }));

// Leap Year | First condition 400% = 0 mustbe and 4 er gonitok hote hobe and 100 diye vag kora jabe na.

function isLeapYear(year) {
    if ((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))) {
        console.log(`${year} is a leap year`);
    } else {
        console.log(`${year} is not a leap year`);
    }

}

isLeapYear(2020);

// SENTENCE a kotogulo VOWEL ace ta bar korte hobe
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowels(sentence) {
    let count = 0;
    const letters = Array.from(sentence);
    letters.forEach(function(value, index, array) {
        if (vowels.includes(value)) {
            count++;
        }
    });

    return count;
    /* return sentence.split('').reduce((initValue, currentValue) => {
        return vowels.includes(currentValue) ? initValue + 1 : initValue;
    }, 0) */

}

console.log(countVowels("I Love Bangladesh Too Much!"));

// Kono array theke duplicate value bar kore ana

const mainNumber = [1, 4, 5, 5, 6, 7, 6, 8, 9, 10, 4];
const duplicates = mainNumber.filter(function(value, index, array) {
    return array.indexOf(value) !== index;
});
console.log(duplicates);