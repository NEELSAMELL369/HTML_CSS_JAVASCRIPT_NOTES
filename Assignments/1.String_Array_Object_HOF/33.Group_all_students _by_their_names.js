let subjectsHash = {
    1: "Javascript",
    2: "HTML",
    3: "CSS",
    4: "Java",
    5: "Rust",
}; 

let students = [
    { id: 1, name: "Prateek", subjectID: 5 },
    { id: 2, name: "Yogesh", subjectID: 2 },
    { id: 3, name: "Nrupul", subjectID: 4 },
    { id: 4, name: "Prateek", subjectID: 1 },
];

// Initialize an empty object for the result
let newObj = {};

// Loop through the students array
students.forEach(student => {
    let subject = subjectsHash[student.subjectID]; // Get the subject name

    // If the student's name is not yet in newObj, initialize it with an empty array
    if (!newObj[student.name]) {
        newObj[student.name] = [];
    }

    // Add the subject to the student's list of subjects
    newObj[student.name].push(subject);
});

console.log(newObj);

// output
// {
//     Prateek: [ 'Rust', 'Javascript' ],
//     Yogesh: [ 'HTML' ],
//     Nrupul: [ 'Java' ]
// }














//---------------------------------------------------------TypeScript-----------------------------------------------------



// type SubjectsHash = {
//     [id: number]: string;
// };

// type Student = {
//     id: number;
//     name: string;
//     subjectID: number;
// };

// type StudentSubjects = {
//     [name: string]: string[];
// };

// const subjectsHash: SubjectsHash = {
//     1: "Javascript",
//     2: "HTML",
//     3: "CSS",
//     4: "Java",
//     5: "Rust",
// };

// const students: Student[] = [
//     { id: 1, name: "Prateek", subjectID: 5 },
//     { id: 2, name: "Yogesh", subjectID: 2 },
//     { id: 3, name: "Nrupul", subjectID: 4 },
//     { id: 4, name: "Prateek", subjectID: 1 },
// ];

// const newObj: StudentSubjects = {};

// students.forEach((student) => {
//     const subject = subjectsHash[student.subjectID];
//     if (!newObj[student.name]) {
//         newObj[student.name] = [];
//     }
//     newObj[student.name].push(subject);
// });

// console.log(newObj);
