function employeeSummary(employees) {
    // Create a summary for each employee
    const summaryArray = employees.map(employee => {
        return `${employee.name} works in ${employee.department} department and earns $${employee.salary} annually.`;
    });
    return summaryArray;
}

// Example invocation
console.log(employeeSummary(employees));
// Output:
// [
//   "John Doe works in HR department and earns $50000 annually.",
//   "Jane Smith works in Finance department and earns $60000 annually.",
//   "Alex Johnson works in IT department and earns $70000 annually.",
//   "Maria Lopez works in Finance department and earns $55000 annually."
// ]
