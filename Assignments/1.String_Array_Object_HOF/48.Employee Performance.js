function evaluateEmployees(employees) {
  // Step 1: Filter employees with more than 5 tasks completed
  const filtered = employees.filter(emp => emp.tasksCompleted > 5);

  // Step 2: Map to include name and performance level
  const mapped = filtered.map(emp => {
    let performance = "";
    if (emp.rating > 4.5) {
      performance = "Excellent";
    } else if (emp.rating >= 3) {
      performance = "Good";
    } else {
      performance = "Needs Improvement";
    }

    return { name: emp.name, performance };
  });

  // Step 3: Sort based on performance level
  const performancePriority = {
    "Excellent": 3,
    "Good": 2,
    "Needs Improvement": 1,
  };

  mapped.sort((a, b) => performancePriority[b.performance] - performancePriority[a.performance]);

  return mapped;
}

// Example input
const employees = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },
  { name: "Bob", tasksCompleted: 4, rating: 4.0 },
  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
  { name: "David", tasksCompleted: 10, rating: 4.9 },
  { name: "Eve", tasksCompleted: 7, rating: 2.8 }
];

// Function call and output
const result = evaluateEmployees(employees);
console.log(result);
