function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function() { // constructor method
        return this.firstName + ' ' + this.lastName;
    }
}

const bappy = new Person('Ch', 'Bappy', 25);
const rubel = new Person('Rubel', 'Hossain', 32);
// Adding property
bappy.country = 'Bangladesh';
console.log(bappy);