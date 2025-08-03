function employeesInDepartment(employees, department) {
    // Filter out employees who belong to the given department
    const employeesInDept = employees.filter(employee => employee.department === department).map(employee => employee.name);

    return employeesInDept;
}

// Example invocation
const employees = [
    { name: "John Doe", age: 28, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 32, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
    { name: "Maria Lopez", age: 29, department: "Finance", salary: 55000 }
];
console.log(employeesInDepartment(employees, "Finance"));
// Output: ["Jane Smith", "Maria Lopez"]
