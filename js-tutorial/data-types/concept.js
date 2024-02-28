/* The Concept of Data Types
In programming, data types is an important concept.

To be able to operate on variables, it is important to know something about the type.

Without data types, a computer cannot safely solve this: */

let x = 10 + "Fusca";
/* Does it make any sense to add "Fusca" to ten? Will it produce an error or will it produce a result?

JavaScript will treat the example above as: */

let y = "10" + "Fusca";

console.log(x);
console.log(y);
/* 
Note
When adding a number and a string, JavaScript will treat the number as a string. */

let oneNumberPlusString = 20 + "Otavio";

console.log(oneNumberPlusString); // 20Otavio
console.log(typeof oneNumberPlusString); // string

// JavaScript evaluates expressions from left to right. Different sequences can produce different results:

let z = "Otavio" + 16 + 4;
let g = 16 + 4 + "Otavio";
console.log(z); // Otavio164
console.log(g); // 20Otavio