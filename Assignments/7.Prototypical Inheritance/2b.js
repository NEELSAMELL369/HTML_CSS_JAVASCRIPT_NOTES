// 1. Create a class Person with properties name and age
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // 2. Add a method introduce
    
    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// 3. Create a class Employee that extends Person and adds jobTitle
class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age); // Call the parent constructor
        this.jobTitle = jobTitle;
    }

    // 4. Add a method work
    work() {
        console.log(`${this.name} is working as a ${this.jobTitle}.`);
    }
}

// Demonstration


// 1. Create an instance of Person

 const person = new Person("Alice", 30);


// 2. Create an instance of Employee
const employee = new Employee("Bob", 40, "Engineer");


// 3. Call introduce on both instances
person.introduce();      // Output: "Hi, my name is Alice and I am 30 years old."
employee.introduce();    // Output: "Hi, my name is Bob and I am 40 years old."


// 4. Call work on the Employee instance
employee.work();         // Output: "Bob is working as a Engineer."
