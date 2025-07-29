// 1. Define an Animal class with a constructor setting the type property to "Animal".
class Animal {
    constructor() {
        this.type = "Animal";
    }

    // 2. Add a sound method to the Animal class that logs "Animal sound".
    sound() {
        console.log("Animal sound");
    }
}

// 3. Define a Dog class that extends Animal.
class Dog extends Animal {
    constructor() {
        super(); // Call the parent class constructor to inherit properties
    }

    // 4. Override the sound method in Dog class to log "Bark".
    sound() {
        console.log("Bark");
    }
}

// 5. Create an instance of Dog called myDog.
const myDog = new Dog();

// 6. Call the sound method on myDog.
myDog.sound(); // Output: "Bark"
