// Redeclaring Variables

// Redeclaring a variable using the var keyword can impose problems.

// Redeclaring a variable inside a block will also redeclare the variable outside the block:

let completeName = "Otavio Campagnoli";

// {
//   var completeName = "John";
// }

// Redeclaring a variable using the let keyword can solve this problem.

{
  let completeName = "John";
  console.log(completeName); // John
}

console.log(completeName); // Otavio Campagnoli

// Redeclaring a variable inside a block will not redeclare the variable outside the block using keyword let.
