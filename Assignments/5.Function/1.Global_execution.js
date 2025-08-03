// Step 1: Declare a global variable
let age = 25; // Global scope

// Step 2: Function to display the global variable
function displayAge() {
    console.log("Age (from displayAge):", age);
}

// Step 3: Function to change the global variable
function changeAge() {
    age = 30; // Modifies the global 'age'
    console.log("Age (from changeAge):", age);
}

// Call the functions to observe the behavior
displayAge();    // Output: Age (from displayAge): 25
changeAge();     // Output: Age (from changeAge): 30
displayAge();    // Output: Age (from displayAge): 30
