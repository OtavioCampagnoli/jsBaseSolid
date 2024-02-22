/*
    Re-Declaring JavaScript Variables

If you re-declare a JavaScript variable declared with var, it will not lose its value.

The variable carName will still have the value "Volvo" after the execution of these statements:
/*/
var carName = "Volvo";
var carName;

console.log(carName);

var name = "name";

console.log(name);

// Note

// You cannot re-declare a variable declared with let or const.

// This will not work: