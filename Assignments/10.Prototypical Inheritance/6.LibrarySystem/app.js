// app.js

const Book = require('./Book');
const Member = require('./Member');
const PremiumMember = require('./PremiumMember');

// Create books
const book1 = new Book("1984", "George Orwell");
const book2 = new Book("The Alchemist", "Paulo Coelho");
const book3 = new Book("To Kill a Mockingbird", "Harper Lee");
const book4 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
const book5 = new Book("Sapiens", "Yuval Noah Harari");
const book6 = new Book("Clean Code", "Robert C. Martin");

// Create members
const regular = new Member("Alice");
const premium = new PremiumMember("Bob");

// Demonstrate regular member borrowing
regular.borrowBook(book1);
regular.borrowBook(book2);
regular.borrowBook(book3);
regular.borrowBook(book4); // Should not be allowed

console.log("\n");

// Demonstrate premium member borrowing
premium.borrowBook(book4); // Now available
premium.borrowBook(book5);
premium.borrowBook(book6);
premium.borrowBook(book2); // Already borrowed
premium.borrowBook(book3); // Already borrowed
