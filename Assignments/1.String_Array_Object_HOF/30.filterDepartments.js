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


//---------------------------------------------------------TypeScript-----------------------------------------------------
// type DepartmentData = {
//   Q1: number;
//   Q2: number;
// };

// type Data = {
//   [department: string]: DepartmentData;
// };

// function filterDepartments(data: Data): string[] {
//   return Object.entries(data)
//     .map(([department, value]) => {
//       let total = value.Q1 + value.Q2;

//       return { department, total };
//     })
//     .filter((d) => d.total > 150000)
//     .map((d) => d.department);
// }

// let data: Data = {
//   HR: { Q1: 50000, Q2: 70000 },
//   Tech: { Q1: 150000, Q2: 130000 },
//   Sales: { Q1: 80000, Q2: 85000 },
// };

// console.log(filterDepartments(data));
