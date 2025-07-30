function secondLargestAge(data) {
    const ages = [...new Set(data.map(person => person.age))]; // unique ages
    ages.sort((a, b) => b - a);
    return ages[1] || null;
}

// Example
const people = [
    { name: "A", age: 30 },
    { name: "B", age: 25 },
    { name: "C", age: 30 },
    { name: "D", age: 22 }
];
console.log(secondLargestAge(people)); // Output: 25
