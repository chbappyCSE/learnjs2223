// The Difference Between call() and apply()

// The call() method takes arguments separatly.
// The apply() method takes arguments as an Array.

const person = {
    fullName: function(city, country) { // parameter pass
        return this.firstName + ' ' + this.lastName + ' - ' + city + ' ' + country;
    }
};

const person1 = {
    firstName: 'Ch',
    lastName: 'Bappy'
};
const person2 = {
    firstName: 'Bappy',
    lastName: 'Ch'
};

// const myArr = ['Dhaka', 'Bangladesh']; //Another way

const result = person.fullName.apply(person1, ['Dhaka', 'Bangladesh']);
// const result = person.fullName.apply(person1, myArr);
console.log(result);


const maxValue = Math.max.apply(null, [1, 2, 3]);
console.log(maxValue);