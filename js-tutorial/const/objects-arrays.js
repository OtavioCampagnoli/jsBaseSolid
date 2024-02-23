/*
    Constant Objects and Arrays

The keyword const is a little misleading.

It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:

    Reassign a constant value
    Reassign a constant array
    Reassign a constant object

    But you CAN:
    Change the elements of constant array
    Change the properties of constant object

*/

const person = {
  firstName: "Otavio",
  lastName: "Campagnoli",
  age: 20,
  eyeColor: "brown",
};

// const person = {name: "test"}; I can not do this... Because of memory reference will be lost.

console.log(person);
//   {
//     firstName: 'Otavio',
//     lastName: 'Campagnoli',
//     age: 20,
//     eyeColor: 'brown'
//   }

person.firstName = "John";
person.lastName = "Thompson"; // I can change the elements of constant object...

console.log(person);
// { firstName: 'John', lastName: 'Thompson', age: 20, eyeColor: 'brown' }