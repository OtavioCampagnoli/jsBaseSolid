// Create a function that takes a sentence as input and returns an array containing the words of that sentence.

let phrase = "My name is Otavio, I really like to code and study programming.";

function showOneArray(string) {
  return string.split(" ");
}

let array = showOneArray(phrase);
console.log(array);
// Then, create another function that does the opposite: it takes an array of words and returns a sentence.

function showOneString(array) {
  return array.join(" ");
}

let result;

result = showOneString(array);

console.log(result);
