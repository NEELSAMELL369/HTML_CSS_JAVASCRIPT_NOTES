function sortStudentsByCondition(students, conditionFn) {
    // Copy the array to avoid modifying the original array
    const sortedStudents = [...students];
    // Sort using the provided condition function
    sortedStudents.sort(conditionFn);
    return sortedStudents;
}

// Condition function: Sort by age in descending order
function sortByAgeDescending(a, b) {
    return b.age - a.age;
}

// Example usage:
const students = [
    { name: "Alice", age: 21 },
    { name: "Bob", age: 19 },
    { name: "Charlie", age: 23 },
    { name: "David", age: 20 }
];

const sortedStudents = sortStudentsByCondition(students, sortByAgeDescending);
console.log(sortedStudents);
