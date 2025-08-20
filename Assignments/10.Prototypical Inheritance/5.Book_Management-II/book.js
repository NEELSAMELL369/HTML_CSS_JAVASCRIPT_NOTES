// Book Constructor
function Book(title, author, isAvailable = true) {
  this.title = title;
  this.author = author;
  this.isAvailable = isAvailable;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}`;
};
