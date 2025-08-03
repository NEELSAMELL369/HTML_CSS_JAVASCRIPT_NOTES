// Base class for all products
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  // Common method
  displayInfo() {
    return `${this.name} - $${this.price}, Quantity: ${this.quantity}`;
  }
}

// Electronics class extending Product
class Electronics extends Product {
  constructor(name, price, quantity, brand, model) {
    super(name, price, quantity);
    this.brand = brand;
    this.model = model;
  }

  powerOn() {
    return `${this.name} is now powered on.`;
  }

  powerOff() {
    return `${this.name} is now powered off.`;
  }
}

// Clothing class extending Product
class Clothing extends Product {
  constructor(name, price, quantity, size, material) {
    super(name, price, quantity);
    this.size = size;
    this.material = material;
  }
}

// Books class extending Product
class Books extends Product {
  constructor(name, price, quantity, author, genre) {
    super(name, price, quantity);
    this.author = author;
    this.genre = genre;
  }
}

// Example usage
const laptop = new Electronics("Laptop", 1200, 5, "Dell", "Inspiron");
console.log(laptop.displayInfo()); // Laptop - $1200, Quantity: 5
console.log(laptop.powerOn()); // Laptop is now powered on.

const shirt = new Clothing("T-Shirt", 25, 10, "L", "Cotton");
console.log(shirt.displayInfo()); // T-Shirt - $25, Quantity: 10

const novel = new Books("The Great Gatsby", 15, 3, "F. Scott Fitzgerald", "Fiction");
console.log(novel.displayInfo()); // The Great Gatsby - $15, Quantity: 3
