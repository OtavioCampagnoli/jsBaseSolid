/*

The const keyword was introduced in ES6 (2015)

Variables defined with const cannot be Redeclared

Variables defined with const cannot be Reassigned

Variables defined with const have Block Scope
 */

// Cannot be Reassigned

// A variable defined with the const keyword cannot be reassigned:

const pi = 3.141592653589793;
pi = 3.14; // If you try to compile, will return an error;
pi = pi + 10; // // If you try to compile, will return an error;