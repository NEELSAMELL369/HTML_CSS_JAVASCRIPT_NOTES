function mergingObjects(student, course) {
    // Merge both objects using the spread operator
    const studentWithCourse = { ...student, ...course };
    return studentWithCourse;
}

// Example invocation
const student = { name: "Alice", age: 20 };
const course = { courseName: "Math", teacher: "Mr. Smith" };
console.log(mergingObjects(student, course));
// Output: { name: "Alice", age: 20, courseName: "Math", teacher: "Mr. Smith" }