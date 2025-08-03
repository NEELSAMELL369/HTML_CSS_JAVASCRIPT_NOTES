function highestPaid(employees) {
    let highestSalaryEmployee = employees[0];
    
    for (let i = 1; i < employees.length; i++) {
        if (employees[i].salary > highestSalaryEmployee.salary) {
            highestSalaryEmployee = employees[i];
        }
    }
    
    return highestSalaryEmployee;
}

// Example Invocation:
const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 }
];

console.log(highestPaid(employees));
// Output: { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }


