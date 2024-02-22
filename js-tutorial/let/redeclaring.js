// Redeclaring

// Redeclaring a JavaScript variable with var is allowed anywhere in a program:

var name = "Otavio Henrique";
// Now is Otavio Henrique
var name = "Jose Carlos";
// Now is Jose Carlos;

// With let, redeclaring a variable in the same block is NOT allowed:

var z = 3 + 5;
var z = 2 + 8;

{
  let x = 2; // allowed
  // let x = 3; not allowed
  console.log(x); // 2
}
console.log(z); // 10
{
  let x = 210;
  var z = 3;
  console.log(x); // 210
  console.log(z); // 3
}

console.log(z); // 3