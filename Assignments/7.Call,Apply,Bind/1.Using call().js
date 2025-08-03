function personInfo() {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
}

const person = {
  name: "John",
  age: 30
};

// Use call() to invoke personInfo with 'person' as context
personInfo.call(person); // Output: Name: John, Age: 30
