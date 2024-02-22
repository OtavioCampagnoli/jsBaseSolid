// JavaScript Let

// The let keyword was introduced in ES6 (2015)

// Variables declared with let have Block Scope (1)

// Variables declared with let must be Declared before use (2)

// Variables declared with let cannot be Redeclared in the same scope (3)

// (3) function myFunction(name) {
//     let name = "Otavio";
//     let name = "Henrique";
// }

function myFunction(params) {
  //(1)
  const firstName = "Otavio"; // Incorret way

  let lastName;
  lastName = "Campagnoli"; // Correct way (2)

  console.log(firstName + lastName);
}
