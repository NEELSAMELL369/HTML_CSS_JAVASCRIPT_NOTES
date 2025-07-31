function outerFunction() {
  const message = "Hello from the closure!";
  
  function innerFunction() {
    console.log(message);
  }

  return innerFunction;
}

// Create closure
const closureFunc = outerFunction();

// Call the inner function
closureFunc(); // Output: Hello from the closure!
