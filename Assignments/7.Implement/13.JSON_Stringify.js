// Create the student object
let student = {
  name: "Alice",
  age: 22,
  course: "Computer Science"
};

// Convert the object to a JSON string
let jsonString = JSON.stringify(student, null, 2);

// Log the JSON string to the console
console.log(jsonString);
