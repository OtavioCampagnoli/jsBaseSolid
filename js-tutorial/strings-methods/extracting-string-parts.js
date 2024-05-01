// Extracting String Parts
// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

// JavaScript String slice()
// slice() extracts a part of a string and returns the extracted part in a new string.

// The method takes 2 parameters: start position, and end position (end not included).

let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);

console.log(part);
part = text.slice(0, 5);
console.log(part);

part = text.slice(7); // If you omit the second parameter, the method will slice out the rest of the string:
console.log(part);

// If a parameter is negative, the position is counted from the end of the string:

part = text.slice(-12);
console.log(part);

part = text.slice(-12, -6);
console.log(part);


