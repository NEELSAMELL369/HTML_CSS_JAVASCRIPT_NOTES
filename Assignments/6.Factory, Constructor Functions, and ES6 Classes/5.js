function animal(noOfLegs, vegetarian) {
    return {
        noOfLegs: noOfLegs,
        vegetarian: vegetarian,
        eat() {
            return "eating...";
        },
        greet() {
            return `Hi, I have ${noOfLegs} legs.`;
        }
    };
}

// Example usage:
let a1 = animal(4, true);
console.log(a1.eat());      // Output: "eating..."
console.log(a1.greet());    // Output: "Hi, I have 4 legs."
