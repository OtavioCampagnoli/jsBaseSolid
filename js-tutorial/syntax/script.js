// JavaScript Syntax

// How to create variables:
var x;
let y;

// How to use variables:
x = 5;
y = 6;
let z = x + y;

// JavaScript Values -  two types of values

// Fixed values => called Literals
// Variable values => called Variables

console.log("JavaScript Literals");

console.log("1. Numbers are written with or without decimals:");
console.log(10.50 + "or" + 1050);

console.log("Strings are text, written within double or single quotes:");
console.log('Otavio');
console.log("Otavio");

// JavaScript Variables

console.log("\nJavaScript Variables");
/*
In a programming language, variables are used to store data values.

JavaScript uses the keywords var, let and const to declare variables.

An equal sign is used to assign values to variables.

In this example, x is defined as a variable. Then, x is assigned (given) the value 6:
 */
let x;
x = 6;
console.log(x);

// JavaScript Operators

// JavaScript uses arithmetic operators ( + - * / ) to compute values:

// (5 + 6) * 10

console.log((5 + 6) * 10);

// JavaScript uses an assignment operator ( = ) to assign values to variables:

let b, a;
a = 5;
b = 6;

/*

JavaScript Expressions
An expression is a combination of values, variables, and operators, which computes to a value.

The computation is called an evaluation.

For example, 5 * 10 evaluates to 50: */

5 * 10;

// Expressions can also contain variable values:

x * 10;

/*
The values can be of various types, such as numbers and strings.
For example, "John" + " " + "Doe", evaluates to "John Doe": */

"John" + " " + "Doe";

// JavaScript Keywords

/*
JavaScript keywords are used to identify actions to be performed.

The let keyword tells the browser to create variables: */

let test = "test";
console.log(test);

// the var keyword also tells the browser to create variables:

var guess = "guess";
console.log(guess);

/*
In these examples, using var or let will produce the same result.

You will learn more about var and let later in this tutorial.
 */

// JavaScript Comments

console.log("JavaScript Comments Not all JavaScript statements are executed. Code after double slashes // or between /* and */ is treated as a comment. Comments are ignored, and will not be executed:");

/*
JavaScript Identifiers / Names
Identifiers are JavaScript names.

Identifiers are used to name variables and keywords, and functions.

The rules for legal names are the same in most programming languages.

A JavaScript name must begin with:

A letter (A-Z or a-z)
A dollar sign ($)
Or an underscore (_)
Subsequent characters may be letters, digits, underscores, or dollar signs.
*/

/*
Note
Numbers are not allowed as the first character in names.

This way JavaScript can easily distinguish identifiers from numbers.
*/

/*
JavaScript is Case Sensitive

All JavaScript identifiers are case sensitive. 

The variables lastName and lastname, are two different variables:
 */

let lastname, lastName;
lastName = "Doe";
lastname = "Peterson";

console.log(lastName + lastname);

// JavaScript does not interpret LET or Let as the keyword let.

/*
JavaScript and Camel Case
Historically, programmers have used different ways of joining multiple words into one variable name:

Hyphens:

first-name, last-name, master-card, inter-city.

Hyphens are not allowed in JavaScript. They are reserved for subtractions.

Underscore:

first_name, last_name, master_card, inter_city.

Upper Camel Case (Pascal Case):

FirstName, LastName, MasterCard, InterCity.

Lower Camel Case:

JavaScript programmers tend to use camel case that starts with a lowercase letter:

firstName, lastName, masterCard, interCity.
 */


/*
JavaScript Character Set
JavaScript uses the Unicode character set.

Unicode covers (almost) all the characters, punctuations, and symbols in the world. */