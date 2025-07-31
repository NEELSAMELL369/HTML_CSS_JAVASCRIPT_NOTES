// Member Constructor
function Member(name) {
  this.name = name;
  this.borrowedBooks = [];
}

// Member can borrow up to 3 books
Member.prototype.borrowBook = function (book) {
  if (this.borrowedBooks.length >= 3) {
    console.log(`${this.name} has reached the limit of borrowed books.`);
    return;
  }

  if (book.isAvailable) {
    book.isAvailable = false;
    this.borrowedBooks.push(book.title);
    console.log(`${this.name} successfully borrowed "${book.title}".`);
  } else {
    console.log(`Sorry, "${book.title}" is already borrowed.`);
  }
};
