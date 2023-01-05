function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function() {
        return this.firstName + ' ' + this.lastName;
    }
}
const bappy = new Person('Ch', 'Bappy', 25);
const abul = new Person('Abul', 'Hasan', 24);
// constructor a property add kora jabe na
// Person.country = 'Bangladesh'; // not allowed in constructor
// kintu prototype a add kora jabe like:
Person.prototype.country = 'Bangladesh'; // use prototype for constructor property
console.dir(Person); // sob kichu console a dekhte dir use kora hoy
console.log(bappy.country);
console.log(abul.country);

// How to create own prototype
String.prototype.doingFun = function() {
    return 'I am doing Fun!';
}

const x = 'Bangladesh';
console.log(x.doingFun());