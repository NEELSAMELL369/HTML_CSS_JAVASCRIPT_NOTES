// 1. Create a constructor function Person with properties name and age.
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 2. Add a method introduce to Person.prototype that logs:
//    "Hi, my name is [name] and I am [age] years old."
Person.prototype.introduce = function () {
  console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
};

// 3. Create a constructor function Employee that inherits from Person and adds jobTitle.
function Employee(name, age, jobTitle) {
  Person.call(this, name, age); // Call the Person constructor to inherit properties
  this.jobTitle = jobTitle;
}

// 4. Ensure that Employee.prototype inherits from Person.prototype.
Employee.prototype = Object.create(Person.prototype);

// 5. Add a method work to Employee.prototype that logs:
//    "[name] is working as a [jobTitle]."
Employee.prototype.work = function () {
  console.log(`${this.name} is working as a ${this.jobTitle}.`);
};

// Demonstration

// 1. Create an instance of Person.
const person = new Person("Alice", 30);

// 2. Create an instance of Employee.
const employee = new Employee("Bob", 40, "Engineer");

// 3. Call introduce on both instances.
person.introduce(); // Output: "Hi, my name is Alice and I am 30 years old."
employee.introduce(); // Output: "Hi, my name is Bob and I am 40 years old."

// 4. Call work on the Employee instance.
employee.work(); // Output: "Bob is working as a Engineer."
