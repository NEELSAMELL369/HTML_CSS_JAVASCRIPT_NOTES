function destructuringToSwap(employees) {
    const [firstEmployee, ...middleEmployees] = employees;
    const lastEmployee = middleEmployees.pop();
    
    return [lastEmployee, ...middleEmployees, firstEmployee];
}
    
// Example Invocation:  
const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 }
];

console.log(destructuringToSwap(employees));
// Output: 
// [
//   { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 },
//   { name: 'Jane Smith', age: 28, department: 'Finance', salary: 60000 },
//   { name: 'John Doe', age: 30, department: 'HR', salary: 50000 }
// ]
