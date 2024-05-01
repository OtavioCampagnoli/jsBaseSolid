// Create a function that takes a string and two indices as input, and returns the part of the string between those two indices.

let myString = "Otavio Campagnoli";

console.log(myString);

function selectFirstName(start, end) {
  return myString.slice(start, end);
}

console.log(selectFirstName(0, 6));
