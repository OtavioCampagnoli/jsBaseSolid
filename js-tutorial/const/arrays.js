// Constant Arrays

// You can change the elements of a constant array:

// You can create a constant array:
const cars = ["Fiat", "Chevrolet", "Nissan"];

// You can change an element:
cars[0] = "Toyota";
// [ 'Toyota', 'Chevrolet', 'Nissan' ]

console.log(cars);
// You can add an element:
cars.push("Audi");

console.log(cars);
// [ 'Toyota', 'Chevrolet', 'Nissan', 'Audi' ]


// but you can not reassign the array:

// const cars = ["Volvo", "Nissan", "Fiat"];

// cars = ["Toyota", "Volvo", "Audi"];  // Error!