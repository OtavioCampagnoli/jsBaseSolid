// JavaScript Functions

// A JavaScript function is a block of code designed to perform a particular task.

// A JavaScript function is executed when "something" invokes it (calls it).

function sum(n1, n2) {
  return n1 + n2;
}

let result = sum(12, 20);
console.log(result);

// JavaScript Function Syntax

// A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

// Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

// The parentheses may include parameter names separated by commas:
// (parameter1, parameter2, ...)

// The code to be executed, by the function, is placed inside curly brackets: {}
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}

// Function parameters are listed inside the parentheses () in the function definition.

// Function arguments are the values received by the function when it is invoked.

// Inside the function, the arguments (the parameters) behave as local variables.

// Function Invocation

// The code inside the function will execute when "something" invokes (calls) the function:

    // When an event occurs (when a user clicks a button)
    // When it is invoked (called) from JavaScript code
    // Automatically (self invoked)

// You will learn a lot more about function invocation later in this tutorial.

// Example

// Calculate the product of two numbers, and return the result:
// Function is called, the return value will end up in x
let x = myFunction(4, 3);

function myFunction(a, b) {
// Function returns the product of a and b
  return a * b;
}

