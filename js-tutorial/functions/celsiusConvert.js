function toCelsius(fahrenheit) { 
    return (5/9) * (fahrenheit-32);
}

let value = toCelsius(77);
console.log(value);

let anotherValue = toCelsius();
console.log(anotherValue); // Nan (not a number)

// Accessing a function without () returns the function and not the function result:


// let result = toCelsius; 
console.log(result); // [Function: toCelsius] like a object function 

// Note:

// As you see from the examples above, toCelsius refers to the function object, and toCelsius() refers to the function result.