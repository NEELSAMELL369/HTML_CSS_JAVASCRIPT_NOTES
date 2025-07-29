


function cloningObjects(person) {
    // Clone the person object using the spread operator
    const personCopy = { ...person };
    return personCopy;
}

// Example invocation
const person = { name: "John", age: 30, address: "123 Main St" };
console.log(cloningObjects(person));
// Output: { name: "John", age: 30, address: "123 Main St" }