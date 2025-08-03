// Import all constructors if using modules (not needed in vanilla environment)
// import { Book } from './book.js';
// import { Member } from './member.js';
// import { PremiumMember } from './premiumMember.js';

// Book objects
const book1 = new Book("Atomic Habits", "James Clear");
const book2 = new Book("Clean Code", "Robert C. Martin");
const book3 = new Book("The Alchemist", "Paulo Coelho");
const book4 = new Book("JavaScript: The Good Parts", "Douglas Crockford");
const book5 = new Book("Sapiens", "Yuval Noah Harari");

// Member objects
const regularMember = new Member("Ravi");
const premiumMember = new PremiumMember("Sunita");

// Regular member trying to borrow books
regularMember.borrowBook(book1);
regularMember.borrowBook(book2);
regularMember.borrowBook(book3);
regularMember.borrowBook(book4); // should be denied

console.log("\n");

// Premium member trying to borrow books
premiumMember.borrowBook(book4); // should work now
premiumMember.borrowBook(book5);
premiumMember.borrowBook(book1); // already borrowed
premiumMember.borrowBook(book2); // already borrowed
premiumMember.borrowBook(book3); // already borrowed
premiumMember.borrowBook(new Book("Deep Work", "Cal Newport")); // should be denied after 5 books

console.log("\n");

// Bind example
const borrowForRavi = regularMember.borrowBook.bind(regularMember);
const newBook = new Book("Rich Dad Poor Dad", "Robert Kiyosaki");
borrowForRavi(newBook); // should be denied (already borrowed 3)
