// JavaScript Comparison Operators

// Operator 	Description
// == 	        equal to
// === 	        equal value and equal type
// != 	        not equal
// !== 	        not equal value or not equal type
// > 	        greater than
// < 	        less than
// >= 	        greater than or equal to
// <= 	        less than or equal to
// ? 	        ternary operator


const firstName = "otavio";
const number = 10;
const anotherNumber = 5;
const numberTen = 10;

console.log(firstName == "otavio"); // true
console.log(firstName === "otavio"); // true
console.log(number == "10");// true
console.log(number === 10); // true
console.log(number === "10"); // false

console.log(number != "10");// false
console.log(number !== 10); // false
console.log(number !== "10"); // true

console.log(anotherNumber < "10");// true
console.log(anotherNumber > 10); // false
console.log(numberTen <= "10"); // true
console.log(numberTen >= "10"); // true