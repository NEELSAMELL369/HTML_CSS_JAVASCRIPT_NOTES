function totalSalaryByDepartment(employees, department) {
  // Calculate the total salary of all employees in the given department
  const totalSalary = employees
    .filter((employee) => employee.department === department)
    .reduce((sum, employee) => sum + employee.salary, 0);
  return totalSalary;
}

const employees = [
  { name: "John Doe", age: 28, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 32, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  { name: "Maria Lopez", age: 29, department: "Finance", salary: 55000 },
];

// Example invocation
console.log(totalSalaryByDepartment(employees, "Finance"));
// Output: 115000
