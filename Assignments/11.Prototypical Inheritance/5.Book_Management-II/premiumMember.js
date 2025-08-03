// Premium Member Constructor (inherits from Member)
function PremiumMember(name) {
  Member.call(this, name); // inherit properties
  this.specialCollectionAccess = true;
}

// Inherit methods
PremiumMember.prototype = Object.create(Member.prototype);
PremiumMember.prototype.constructor = PremiumMember;

// Override borrowBook method
PremiumMember.prototype.borrowBook = function (book) {
  if (this.borrowedBooks.length >= 5) {
    console.log(`${this.name} has reached the limit of borrowed books.`);
    return;
  }

  // Reuse Member's borrowBook using call
  Member.prototype.borrowBook.call(this, book);
};
