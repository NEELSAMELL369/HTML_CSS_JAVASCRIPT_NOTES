function employeeInformation(employees) {
    // Extract the name and department of the second employee
    const { name: secondEmployeeName, department: secondEmployeeDepartment } = employees[1];
    return { secondEmployeeName, secondEmployeeDepartment };
}

// Example invocation
const employees = [
    { name: "John Doe", age: 28, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 32, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 }
];
console.log(employeeInformation(employees));
// Output: { secondEmployeeName: "Jane Smith", secondEmployeeDepartment: "Finance" }
