/*
 * JSON is a format for storing and transporting data.
 * JSON is often used when data is sent from a server to a web page.
 * What is JSON?
    JSON stands for JavaScript Object Notation
    JSON is a lightweight data interchange format
    JSON is language independent *
    JSON is "self-describing" and easy to understand 
 * The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language.
 */

// JSON Example

let text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
let obj = JSON.parse(text); // convert json to valid js formate
// console.log(obj.employees[0].firstName, obj.employees[0].lastName);
console.log(obj);

let person = {
    firstName: "Ch",
    lastName: "Bappy"
}

// Convert Object to JSON
console.log(JSON.stringify(person));