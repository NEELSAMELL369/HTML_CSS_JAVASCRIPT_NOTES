// Base class: User
//
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getDetails() {
    console.log(`Name: ${this.name}, Email: ${this.email}`);
  }
}

// Subclass: Student
class Student extends User {
  constructor(name, email, studentId) {
    super(name, email);
    this.studentId = studentId;
  }

  enroll() {
    console.log(`Student ${this.name} has enrolled.`);
  }
}

// Subclass: Instructor
class Instructor extends User {
  constructor(name, email, instructorId) {
    super(name, email);
    this.instructorId = instructorId;
  }

  assignGrade() {
    console.log(`Instructor ${this.name} assigned a grade.`);
  }
}

// Demonstration
const student1 = new Student('Aarav Shah', 'aarav@example.com', 'STU101');
student1.getDetails();     // Output: Name: Aarav Shah, Email: aarav@example.com
student1.enroll();         // Output: Student Aarav Shah has enrolled.

const instructor1 = new Instructor('Meera Iyer', 'meera@example.com', 'INS202');
instructor1.getDetails();  // Output: Name: Meera Iyer, Email: meera@example.com
instructor1.assignGrade(); // Output: Instructor Meera Iyer assigned a grade.
