function sortStudentsByTotalMarks(students) {
    return students
        .map(student => ({
            name: student.name,
            total: student.marks.reduce((sum, mark) => sum + mark, 0)
        }))
        .sort((a, b) => b.total - a.total)
        .map(student => student.name);
}


const students = [
    { name: "Aarav", marks: [88, 76, 92] },
    { name: "Diya", marks: [99, 91, 85] },
    { name: "Kabir", marks: [72, 89, 68] }
];

console.log(sortStudentsByTotalMarks(students));
