// Book.js

// Constructor Function
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// Prototype Method
Book.prototype.getSummary = function () {
  return `${this.title} by ${this.author}, published in ${this.year}.`;
};

// Export the constructor
module.exports = Book;
