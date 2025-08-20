function highestStudentCountDepartment(school) {
  let maxStudents = 0;
  let departmentWithMaxStudents = "";

  // Iterate over the departments to find the one with the most students
  for (let department in school.departments) {
    if (school.departments[department].students > maxStudents) {
      maxStudents = school.departments[department].students;
      departmentWithMaxStudents = department;
    }
  }
  return `Highest student count dept: ${departmentWithMaxStudents}`;
}

const school = {
  name: "XYZ School",
  establishYear: 1990,
  departments: {
    math: { teachers: 5, students: 150 },
    science: { teachers: 4, students: 120 },
    history: { teachers: 3, students: 100 },
    english: { teachers: 4, students: 130 },
  },
  courses: ["math", "science", "history", "english"],
  students: [
    {
      name: "Alice",
      className: "Grade 5",
      scores: { math: 95, science: 88, history: 85, english: 92 },
    },
    {
      name: "Bob",
      className: "Grade 4",
      scores: { math: 80, science: 78, history: 92, english: 85 },
    },
    {
      name: "Charlie",
      className: "Grade 5",
      scores: { math: 88, science: 90, history: 78, english: 88 },
    },
    {
      name: "Diana",
      className: "Grade 4",
      scores: { math: 92, science: 85, history: 88, english: 90 },
    },
  ],
};



// Example usage
console.log(highestStudentCountDepartment(school));











//---------------------------------------------------------TypeScript-----------------------------------------------------



// type Scores = {
//     [subject: string]: number;
// };

// type Student = {
//     name: string;
//     className: string;
//     scores: Scores;
// };

// type School = {
//     name: string;
//     establishYear: number;
//     departments: {
//         [key: string]: { teachers: number; students: number };
//     };
//     courses: string[];
//     students: Student[];
// };

// function findTopStudent(school: School, subject: string): Student | null {
//     let topScore = -Infinity;
//     let topStudent: Student | null = null;

//     for (let student of school.students) {
//         if (student.scores[subject] !== undefined && student.scores[subject] > topScore) {
//             topScore = student.scores[subject];
//             topStudent = student;
//         }
//     }

//     return topStudent;
// }

// // Example usage:
// const school: School = {
//     name: "XYZ School",
//     establishYear: 1990,
//     departments: {
//         math: { teachers: 5, students: 150 },
//         science: { teachers: 4, students: 120 },
//         history: { teachers: 3, students: 100 },
//         english: { teachers: 4, students: 130 },
//     },
//     courses: ["math", "science", "history", "english"],
//     students: [
//         {
//             name: "Alice",
//             className: "Grade 5",
//             scores: { math: 95, science: 88, history: 85, english: 92 },
//         },
//         {
//             name: "Bob",
//             className: "Grade 4",
//             scores: { math: 80, science: 78, history: 92, english: 85 },
//         },
//         {
//             name: "Charlie",
//             className: "Grade 5",
//             scores: { math: 88, science: 90, history: 78, english: 88 },
//         },
//         {
//             name: "Diana",
//             className: "Grade 4",
//             scores: { math: 92, science: 85, history: 88, english: 90 },
//         },
//     ],
// };

// console.log(findTopStudent(school, "math"));
// console.log(findTopStudent(school, "science"));
