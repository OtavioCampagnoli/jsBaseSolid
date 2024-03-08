// Functions Used as Variable Values

// Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations.
// Example

// Instead of using a variable to store the return value of a function:

function sum(n1, n2) {
  return n1 + n2;
}

let x = sum(2, 3);
let text = "The Sum of: " + "2 + " + "3" + " = " + x;

// You can use the function directly, as a variable value:
let text2 = "The Sum of: " + "5 + " + "5" + " = " + sum(5, 5);
console.log(text); // The Sum of: 2 + 3 = 5
console.log(text2); // The Sum of: 5 + 5 = 10