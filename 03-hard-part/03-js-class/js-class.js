class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    // Create a Class method named "age", that returns the Car age:
    age() {
        console.log(this.name + ' is 20 years old');
    }
}
const myCar = new Car("BMW", 2014);

// myCar.age();
// console.log(myCar.name + ' ' + myCar.year);