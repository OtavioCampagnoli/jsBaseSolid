// Local Variables

// Variables declared within a JavaScript function, become LOCAL to the function.

// Local variables can only be accessed from within the function.
Example
// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName

// Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.

// Local variables are created when a function starts, and deleted when the function is completed.