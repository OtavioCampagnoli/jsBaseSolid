// Object Methods

// Objects can also have methods.

// Methods are actions that can be performed on objects.

// Methods are stored in properties as function definitions.

const person = {
  firstName: "Otavio",
  lastName: "Campagnoli",
  fullName: function () {
    return `${this.firstName} ${this.lastName}.`; // In an object method, 'this' refers to the object.
  },
};

// What is this?

// In JavaScript, the this keyword refers to an object.

// Which object depends on how this is being invoked (used or called).

// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

// Note:

// this is not a variable. It is a keyword. You cannot change the value of this.

let name;
name = person.fullName();
console.log(name); // Otavio Campagnoli.
name = person.fullName;
console.log(name); // [Function: fullName]