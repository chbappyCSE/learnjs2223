// Searching for (and fixing) error in programming code is called code debugging.
class Candidate {
    constructor(name, year) {
        debugger;
        this.name = name;
        debugger;
        this.year = year;
    }
    age(x) {
        debugger;
        return x - this.year;
    }
}
let date = new Date();
let year = date.getFullYear();
let candidateInfo = new Candidate("Alok Das", 1980);
console.log(`${candidateInfo.name} is ${candidateInfo.age(year)} years old`);