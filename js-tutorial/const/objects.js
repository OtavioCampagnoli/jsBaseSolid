// Constant Objects

// You can change the properties of a constant object

const carOne = {
  ID: 1,
  name: "Corolla",
  brand: "Toyota",
  price: 7000,
  yearModel: 2022
};

console.log(carOne);
// {
//     ID: 1,
//     name: 'Corolla',
//     brand: 'Toyota',
//     price: 7000,
//     yearModel: 2022
//   }

carOne.price = 8000;

// {
//     ID: 1,
//     name: 'Corolla',
//     brand: 'Toyota',
//     price: 8000,
//     yearModel: 2022
// }

console.log(carOne);

// But you can NOT reassign the object:

// carOne = {
//     ID: 1,
//     name: "Corolla",
//     brand: "Toyota",
//     price: 7000,
//     yearModel: 2022
// }