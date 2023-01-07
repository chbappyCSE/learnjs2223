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

const result = person.fullName.call(person1, 'Dhaka', 'Bangladesh');
console.log(result);