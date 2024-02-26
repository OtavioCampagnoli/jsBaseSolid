// JavaScript String Comparison

// All the comparison operators above can also be used on strings:

let text1 = "A";
let text2 = "B";
let result = text1 < text2;
console.log(result); // true

// Note that strings are compared alphabetically:

text1 = "A";
text2 = "AB";
result = text1 < text2;
console.log(result); // true

text1 = "A";
text2 = "A";
result = text1 < text2;
console.log(result); // false

text1 = "AB";
text2 = "AC";
result = text1 > text2;
console.log(result); // false

text1 = "AC";
text2 = "AB";
result = text1 > text2; // Will comparing the position of string, for example
// in this case "AB" have two characters and "AC" the same characters, but C is upper then B. So text1 is upper then text2;
console.log(result); // true