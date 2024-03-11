// JavaScript Strings as Objects

// Normally, JavaScript strings are primitive values, created from literals:

let nameString = "Otavio";

// But strings can also be defined as objects with the keyword new:

let nameStringObj = new String("Otavio");

console.log(nameString + "" + nameStringObj);

// Do not create Strings objects.

// The new keyword complicates the code and slows down execution speed.

// String objects can produce unexpected results:

let result;

result = nameString == nameStringObj;
console.log(result); // true
result = nameString === nameStringObj;
console.log(result); // false because nameStringObj is as object and nameString is a string

let x = new String("Otavio");
let y = new String("Otavio");

console.log(x == y); // false
console.log(x === y); // true

// Comparing two JavaScript objects always returns false.