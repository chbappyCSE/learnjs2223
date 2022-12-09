let car = {
        name: "Fiat",
        model: 500,
        weight: "850kg",
        color: "White",
        start: function() {
            console.log("car has started");
            this.drive();
        },
        drive: function() {
            console.log("car is driving");
        }
    }
    /* console.log(car.name);
    console.log(car['model']);
    car.start(), car.drive(); */


const person = {
    fName: "Ch",
    lName: "Bappy",
    id: 5566,
    fullName: function() {
        return this.fName + " " + this.lName;
    }
}
let x = person.fullName();
console.log(x);
console.log(typeof person);

// let a = 5;
let a = new Number(5);
console.log(typeof a);