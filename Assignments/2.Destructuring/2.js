


function combiningArrays(fruits, vegetables) {
    // Combine both arrays using the spread operator
    const groceries = [...fruits, ...vegetables];
    return groceries;
}

// Example invocation
const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "broccoli", "spinach"];
console.log(combiningArrays(fruits, vegetables));
// Output: ["apple", "banana", "orange", "carrot", "broccoli", "spinach"]