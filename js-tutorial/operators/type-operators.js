// JavaScript   Type Operators

// Operator 	Description
// typeof 	    Returns the type of a variable
// instanceof 	Returns true if an object is an instance of an object type

function Car(model, brand) {
  this.model = model;
  this.brand = brand;
}

let myCar = new Car("Toyota", "Corolla");

console.log(myCar);
console.log(typeof myCar); // object
console.log(myCar instanceof Car); //true;
console.log(myCar instanceof Array); // false;
console.log(myCar instanceof Object); // true;