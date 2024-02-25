/**Hoisting

Variables defined with var are hoisted to the top and can be initialized at any time.

Meaning: You can use the variable before it is declared:*/

// Example

// This is OK:
carName = "Volvo";
var carName;

// Variables defined with const are also hoisted to the top, but not initialized.

// Meaning: Using a const variable before it is declared will result in a ReferenceError:
// Example
console.log(carName);
// const carName = "Volvo"; Error!