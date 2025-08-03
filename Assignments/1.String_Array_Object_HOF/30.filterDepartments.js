function filterDepartmentsByBudget(departments) {
  const threshold = 150000;
  return Object.entries(departments)
    .filter(([_, budget]) => (budget.Q1 + budget.Q2) > threshold)
    .map(([department]) => department);
}


const input = {
  HR: { Q1: 50000, Q2: 70000 },
  Tech: { Q1: 150000, Q2: 130000 },
  Sales: { Q1: 80000, Q2: 85000 }
};

console.log(filterDepartmentsByBudget(input));
