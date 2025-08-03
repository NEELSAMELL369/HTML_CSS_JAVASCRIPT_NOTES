function calculateFinalGrades(students) {
  // Step 1: Calculate final grade for each student
  const filteredStudents = students
    .map((student) => {
      // Calculate the sum of scores
      const sumOfScores = student.scores.reduce((acc, score) => acc + score, 0);
      // Calculate the average and round it to the nearest integer
      const finalGrade = Math.round(sumOfScores / student.scores.length);
      // Return a new object with name, id, and finalGrade
      return {
        name: student.name,
        id: student.id,
        finalGrade: finalGrade,
      };
    })
    .filter((student) => student.finalGrade >= 70); // Step 2: Apply filtering criteria

  // Step 3: Return the filtered array
  return filteredStudents;
}

// Example usage:
const students = [
  { name: "Alice", scores: [85, 90, 78], id: 1 },
  { name: "Bob", scores: [60, 65, 58], id: 2 },
  { name: "Charlie", scores: [95, 92, 88], id: 3 },
];

const result = calculateFinalGrades(students);
console.log(result);
//output
// [
//   { name: 'Alice', id: 1, finalgrade: 84 },
//   { name: 'Bob', id: 2, finalgrade: 61 },
//   { name: 'Charlie', id: 3, finalgrade: 92 }
// ]