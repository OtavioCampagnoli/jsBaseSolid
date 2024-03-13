// JavaScript String charAt()

// The charAt() method returns the character at a specified index (position) in a string:

let fullName;
fullName = "OtavioCampagnoli";
result = fullName.charAt(3);
console.log(result); // v

// example pratice
/* Write a JavaScript function that takes a string as input and returns the first letter of the string in uppercase.

Tip: You can use the charAt() function to get the first character of the string and then convert it to uppercase. */

function convertFistLetterToUpper(string) {
  let firstLetterUpper;

  if (string === 0) {
    return "";
  }

  firstLetterUpper = string.charAt(0).toUpperCase();
  return firstLetterUpper + string.slice(1);
}

let name = "otavio", convertName;
convertName = convertFistLetterToUpper(name);

console.log(convertName); // Otavio