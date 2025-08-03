function averageSalary(employees){
    let total_salary = employees.map((employee)=>employee.salary).reduce((acc,num)=>acc+num)
    
    let average_salary = total_salary / employees.length
    return average_salary
}

const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 }
];

// Example invocation
console.log(averageSalary(employees));
// Output: 60000