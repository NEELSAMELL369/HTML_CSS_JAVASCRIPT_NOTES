const userProfile = {
    name: "Alice",
    age: 28,

    // Fixed: Template literal was missing backticks
    details() {
        return `${this.name} is ${this.age} years old.`;
    },

    // Fixed: Called this.details() instead of printing the function reference
    updateAge(newAge) {
        if (newAge <= 0) {
            console.log("Invalid age.");
            return;
        }

        this.age = newAge;
        console.log(this.details()); // Must invoke the function
    }
};

// Test
userProfile.updateAge(30);              // Outputs: Alice is 30 years old.
console.log(userProfile.details());     // Outputs: Alice is 30 years old.
