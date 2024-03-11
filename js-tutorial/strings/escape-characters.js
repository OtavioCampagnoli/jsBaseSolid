// Escape Characters

// Because strings must be written within quotes, JavaScript will misunderstand this string:

let text = 'We are the so-called "Vikings" from the north.';
console.log(text);

let fine = "It's alright.";
console.log(fine);

let anotherText = "The character \\ is called backslash.";
console.log(anotherText);

// Six other escape sequences are valid in JavaScript:

// Code 	Result
// \b 	    Backspace
// \f 	    Form Feed
// \n 	    New Line
// \r 	    Carriage Return
// \t 	    Horizontal Tabulator
// \v 	    Vertical Tabulator