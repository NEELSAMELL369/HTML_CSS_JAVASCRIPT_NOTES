const library = {
    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],

    // Add book with proper validation
    addBook(book) {
        if (typeof book !== "object" || book === null) {
            console.log("Invalid book data: Book should be a non-null object.");
            return;
        }

        const { title, author, year } = book;

        if (!title || !author || !year) {
            console.log("Book information is incomplete. Please provide title, author, and year.");
            return;
        }

        if (typeof title !== "string" || typeof author !== "string" || typeof year !== "number") {
            console.log("Invalid data types. Title and author should be strings. Year should be a number.");
            return;
        }

        // Check if the book already exists
        const exists = this.books.some(b => b.title === title);
        if (exists) {
            console.log(`Book titled "${title}" already exists.`);
            return;
        }

        this.books.push({ title, author, year });
        console.log(`Book "${title}" added successfully.`);
    },

    // Find book by title
    findBookByTitle(title) {
        if (!title || typeof title !== "string") {
            console.log("Please provide a valid title.");
            return null;
        }
        const book = this.books.find(book => book.title === title);
        return book || "Book not found.";
    },

    // Remove book by title
    removeBook(title) {
        if (!title || typeof title !== "string") {
            console.log("Please provide a valid title to remove.");
            return;
        }

        const index = this.books.findIndex(book => book.title === title);
        if (index !== -1) {
            const removed = this.books.splice(index, 1);
            console.log(`Removed book: "${removed[0].title}"`);
        } else {
            console.log("Book not found.");
        }
    }
};

// Test Cases

// 🚫 Invalid (missing title)
library.addBook({ author: "George Orwell", year: 1949 });

// ✅ Valid addition
library.addBook({ title: "1984", author: "George Orwell", year: 1949 });

// 🔁 Duplicate title
library.addBook({ title: "1984", author: "George Orwell", year: 1949 });

// 🔍 Find book
console.log("Find Book:", library.findBookByTitle("1984"));

// ❌ Invalid find
console.log("Find Book:", library.findBookByTitle("Unknown"));

// 🗑️ Remove book
library.removeBook("1984");

// ❌ Remove non-existent book
library.removeBook("Nonexistent");

// 📦 Final book count
console.log("Total Books:", library.books.length);
