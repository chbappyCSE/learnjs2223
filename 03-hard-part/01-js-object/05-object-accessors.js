// JavaScript Object Accessors
// ECMAScript 5 (ES5 2009) introduce Getter and Setter allow to define Object Accessors (Computed Properties)

// JavaScript Getter (The get Keyword)

const person = {
    firstName: "Ch",
    lastName: "Bappy",
    language: "en",
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
};

console.log(person.fullName);

// JavaScript Setter (The set Keyword)
const person2 = {
    firstName: "Ch",
    lastName: "Bappy",
    language: "",
    set lang(lang) {
        this.language = lang;
    }
};

person2.lang = "bn";
console.log(person2);

// Object.defineProperty()
const person3 = {
    firstName: "Ch",
    lastName: "Bappy"
};
Object.defineProperty(person3, "fullName", {
    get: function() {
        return this.firstName + ' ' + this.lastName;
    }
});
console.log(person3.fullName);