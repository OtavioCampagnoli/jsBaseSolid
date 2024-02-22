// Difference Between var, let and const
//            (1) Block Scope	     (2) Redeclare    (3) Reassign	    (?) Hoisted	       (?) Binds this
// var(a)	    No	                 Yes	            Yes	              Yes                Yes
// let(b)	    Yes	                 No	              Yes	              No	               No
// const(c)	  Yes	                 No	              No	              No	               No

// { // (1) (a)
var x = 2;
// }
var x = 3; // (2) (a)
console.log(x);
x = 5; // (3) (a)

{
  // (1) (b)
  let car;
  car = "Fusca";
  //let car; (2) (b)
  car = "New Car"; // 3 (b)
  console.log(car);
}

{
  // (1) (c)
  const car = "Ferrari";
  console.log(car);
  // const car = "Fusca"; (2) (c)
  // car = "Test"; (3) (c)
  console.log("Try reassign: " + car + "should be 'Test' If I can do this...");
}

/*

What is Good?

let and const have block scope.

let and const can not be redeclared.

let and const must be declared before use.

let and const does not bind to this.

let and const are not hoisted.*/

/*

What is Not Good?

var does not have to be declared.

var is hoisted. ?

var binds to this. ?
*/
