function transformMarksData(students) {
  return students.map((student) => {
    const marks = [];

    for (let i = 1; i <= 5; i++) {
      const subject = student[`subject${i}`];
      const score = student[`marks${i}`];

      // Check if both subject and score are valid
      if (subject && score !== null) {
        marks.push({ subject, score });
      }
    }

    return {
      name: student.name,
      marks: marks, // Array of objects with subject and score
    };
  });
}

let prateekMarksData = {
  name: "Prateek",
  subject1: "Javascript",
  subject2: "HTML",
  subject3: "CSS",
  subject4: null,
  subject5: null,
  marks1: 90,
  marks2: 81,
  marks3: 80,
  marks4: null,
  marks5: null,
};

let nrupulMarksData = {
  name: "Nrupul",
  subject1: "Java",
  subject2: "Python",
  subject3: null,
  subject4: null,
  subject5: null,
  marks1: 95,
  marks2: 85,
  marks3: null,
  marks4: null,
  marks5: null,
};

let allStudentsMarksData = [prateekMarksData, nrupulMarksData];

const processedData = transformMarksData(allStudentsMarksData);

// Use JSON.stringify to print the output in the expected format
console.log("Final Processed Data:", JSON.stringify(processedData, null, 2));
