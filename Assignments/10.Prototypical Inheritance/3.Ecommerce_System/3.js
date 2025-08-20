// Base constructor for all products
function Product(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}

// Method to display product information (common to all products)
Product.prototype.displayInfo = function () {
  return `${this.name} - $${this.price}, Quantity: ${this.quantity}`;
};

// Electronics constructor, inheriting from Product
function Electronics(name, price, quantity, brand, model) {
  Product.call(this, name, price, quantity); // Call Product constructor
  this.brand = brand;
  this.model = model;
}

// Inherit Product prototype
Electronics.prototype = Object.create(Product.prototype);
Electronics.prototype.constructor = Electronics;

// Electronics-specific methods
Electronics.prototype.powerOn = function () {
  return `${this.name} is now powered on.`;
};

Electronics.prototype.powerOff = function () {
  return `${this.name} is now powered off.`;
};

// Clothing constructor, inheriting from Product
function Clothing(name, price, quantity, size, material) {
  Product.call(this, name, price, quantity); // Call Product constructor
  this.size = size;
  this.material = material;
}

// Inherit Product prototype
Clothing.prototype = Object.create(Product.prototype);
Clothing.prototype.constructor = Clothing;

// Books constructor, inheriting from Product
function Books(name, price, quantity, author, genre) {
  Product.call(this, name, price, quantity); // Call Product constructor
  this.author = author;
  this.genre = genre;
}

// Inherit Product prototype
Books.prototype = Object.create(Product.prototype);
Books.prototype.constructor = Books;

// Example usage
const laptop = new Electronics("Laptop", 1200, 5, "Dell", "Inspiron");
console.log(laptop.displayInfo()); // Laptop - $1200, Quantity: 5
console.log(laptop.powerOn()); // Laptop is now powered on.

const shirt = new Clothing("T-Shirt", 25, 10, "L", "Cotton");
console.log(shirt.displayInfo()); // T-Shirt - $25, Quantity: 10

const novel = new Books(
  "The Great Gatsby",
  15,
  3,
  "F. Scott Fitzgerald",
  "Fiction"
);
console.log(novel.displayInfo()); // The Great Gatsby - $15, Quantity: 3
