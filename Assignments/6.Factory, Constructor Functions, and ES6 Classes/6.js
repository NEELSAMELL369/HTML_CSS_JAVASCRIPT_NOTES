function AnimalCF(noOfLegs, vegetarian) {
    this.noOfLegs = noOfLegs;
    this.vegetarian = vegetarian;

    this.eat = function() {
        return "eating...";
    };

    this.greet = function() {
        return `Hi, I have ${this.noOfLegs} legs.`;
    };
}

// Example usage:
let animalCF = new AnimalCF(4, true);
console.log(animalCF.eat());    // Output: "eating..."
console.log(animalCF.greet());  // Output: "Hi, I have 4 legs."
