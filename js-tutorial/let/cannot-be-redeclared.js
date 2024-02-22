/*
Cannot be Redeclared

Variables defined with let can not be redeclared.

You can not accidentally redeclare a variable declared with let.
 */

// With let you can not do this:

// let variable = "test";

// let variable;

// Variables defined with var can be redeclared.

// with var you can do this:

var x = "testing...";

x = "complete.";

console.log(x);