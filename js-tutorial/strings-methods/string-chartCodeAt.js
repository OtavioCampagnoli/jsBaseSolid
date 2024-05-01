// JavaScript String charCodeAt()


// The charCodeAt() method returns the code of the character at a specified index in a string:

// The method returns a UTF-16 code (an integer between 0 and 65535).

let text, char;
text = "HELLO WORLD";

char = text.charCodeAt(0);

console.log(char);

function haveEspecialCharacter(password) {
  for (var i = 0; i < password.length; i++) {
    var charCode = password.charCodeAt(i);
    if (
      (charCode <= 33 && charCode <= 47) ||
      (charCode >= 58 && charCode <= 64) ||
      (charCode >= 91 && charCode <= 96) ||
      (charCode >= 123 && charCode <= 126)
    ) {
      return true;
    }
  }
  return false;
}

let myPassword;
myPassword = "MyPassword2024";

if (haveEspecialCharacter(myPassword)) {
  console.log("Your password have especial character.");
} else {
  console.log("Your password not have especial character.");
}
