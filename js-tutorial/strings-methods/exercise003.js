// Implement two separate functions that take a string and return different substrings.
// One function should use substring() and the other substr().

let nameTest = "Otavio Campagnoli";

function selectFirstName(fullName) {
  fullName.split();
  let firstName = "";

  for (let i = 0; i < fullName.length; i++) {
    const char = fullName[i];
    firstName += fullName[i];

    if (char == " ") {
      break;
    }
  }

  return firstName;
}

function selectLastName(fullName) {
  let lastName = "",
    startPositionFullName = 0,
    lastPositionFullName = fullName.length;

  fullName.split();

  for (let i = 0; i < fullName.length; i++) {
    const char = fullName[i];

    if (char == " ") {
      startPositionFullName = i + 1;
    }
  }

  fullName.toString();
  fullName.replaceAll(",", "");

  lastName = fullName.substring(startPositionFullName, lastPositionFullName);

  return lastName;
}

console.log(selectFirstName(nameTest));
console.log(selectLastName(nameTest));
