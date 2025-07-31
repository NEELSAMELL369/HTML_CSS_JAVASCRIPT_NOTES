// Book class with properties title, author, year, and genre
class Book {
    constructor(title, author, year, genre) {
      this.title = title;
      this.author = author;
      this.year = year;
      this.genre = genre;
    }
  
    // Method to return book information as a string
    getInfo() {
      return `${this.title} by ${this.author}, published in ${this.year}, Genre: ${this.genre}`;
    }
  }
  
  // Factory function to create new books
  function createBook(title, author, year, genre) {
    return new Book(title, author, year, genre);
  }
  
  // Library class to manage the collection of books
  class Library {
    constructor() {
      this.books = []; // Initializes an empty array of books
    }
  
    // Method to add a book to the collection
    addBook(book) {
      this.books.push(book);
    }
  
    // Method to filter books published after a given year
    filterBooksByYear(year) {
      return this.books.filter(book => book.year > year);
    }
  
    // Method to get an array of all book titles
    getAllTitles() {
      return this.books.map(book => book.title);
    }
  
    // Method to calculate the total number of books
    getTotalBooks() {
      return this.books.reduce(total => total + 1, 0);
    }
  
    // Method to calculate the average publication year of all books
    getAveragePublicationYear() {
      if (this.books.length === 0) return 0; // Avoid division by zero
      const totalYears = this.books.reduce((sum, book) => sum + book.year, 0);
      return totalYears / this.books.length;
    }
  }
  
  // Example usage
  const library = new Library();
  
  const book1 = createBook("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Fiction");
  const book2 = createBook("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction");
  const book3 = createBook("A Brief History of Time", "Stephen Hawking", 1988, "Science");
  
  library.addBook(book1);
  library.addBook(book2);
  library.addBook(book3);
  
  console.log(book1.getInfo()); // The Great Gatsby by F. Scott Fitzgerald, published in 1925, Genre: Fiction
  
  console.log("Books after 1950:", library.filterBooksByYear(1950)); // Array of books published after 1950
  console.log("All book titles:", library.getAllTitles()); // Array of all book titles
  console.log("Total number of books:", library.getTotalBooks()); // Total number of books
  console.log("Average publication year:", library.getAveragePublicationYear()); // Average publication year
  