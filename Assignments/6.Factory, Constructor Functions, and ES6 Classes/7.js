class AnimalES6 {
    constructor(noOfLegs, vegetarian) {
        this.noOfLegs = noOfLegs;
        this.vegetarian = vegetarian;
    }

    eat() {
        return "eating...";
    }

    greet() {
        return `Hi, I have ${this.noOfLegs} legs.`;
    }
}

// Example usage:
let animalES6 = new AnimalES6(4, true);
console.log(animalES6.eat());   // Output: "eating..."
console.log(animalES6.greet()); // Output: "Hi, I have 4 legs."
