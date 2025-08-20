// ==========================
// 1️⃣ Borrowing a function
// ==========================
function showDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}
const user = { name: "John", age: 25 };

// call()
showDetails.call(user); // immediate

// apply()
showDetails.apply(user); // immediate, args in array (none here)

// bind()
const boundShowDetails = showDetails.bind(user);
boundShowDetails(); // later


// ==========================
//  2️⃣ Factory function setup
// ==========================
function setUser(name, age) {
    this.name = name;
    this.age = age;
}
function createUser_call(name, age) {
    const obj = {};
    setUser.call(obj, name, age);
    return obj;
}
function createUser_apply(name, age) {
    const obj = {};
    setUser.apply(obj, [name, age]);
    return obj;
}
function createUser_bind(name, age) {
    const obj = {};
    const bound = setUser.bind(obj, name, age);
    bound();
    return obj;
}
console.log(createUser_call("Neel", 27));
console.log(createUser_apply("Neel", 27));
console.log(createUser_bind("Neel", 27));


// ==========================
// 3️⃣ Constructor inheritance
// ==========================
function PersonConstructor(name, age) {
    this.name = name;
    this.age = age;
}

function Employee_call(name, age, role) {
    PersonConstructor.call(this, name, age);
    this.role = role;
}
function Employee_apply(name, age, role) {
    PersonConstructor.apply(this, [name, age]);
    this.role = role;
}
function Employee_bind(name, age, role) {
    const bound = PersonConstructor.bind(this, name, age);
    bound();
    this.role = role;
}

console.log(new Employee_call("Sam", 30, "Dev"));
console.log(new Employee_apply("Sam", 30, "Dev"));
console.log(new Employee_bind("Sam", 30, "Dev"));


// ==========================
//  4️⃣ Class method borrowing
// ==========================
class Person {
    constructor(name) {
        this.name = name;
    }
    greet(city) {
        console.log(`Hi, I'm ${this.name} from ${city}`);
    }
}
const p1 = new Person("Alice");
const p2 = new Person("Bob");

// call()
p1.greet.call(p2, "Delhi");

// apply()
p1.greet.apply(p2, ["Delhi"]);

// bind()
const boundGreet = p1.greet.bind(p2, "Delhi");
boundGreet();






