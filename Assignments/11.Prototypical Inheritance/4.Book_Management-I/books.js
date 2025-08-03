// books.js

const Book = require('./Book');

// Array of Book instances
const books = [
  new Book("1984", "George Orwell", 1949),
  new Book("To Kill a Mockingbird", "Harper Lee", 1960),
  new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925),
];

// Export the books array
module.exports = books;
