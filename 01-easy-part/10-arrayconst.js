/* 
 * const cannot be reassigned
 * but elements can be reassigned
 * example - 
 */

const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"]; // ERROR

cars[0] = "Toyota"; // Elements can be changed

cars.push("Audi"); // Apply array method