// PremiumMember.js

const Member = require('./Member');

function PremiumMember(name) {
  Member.call(this, name); // Inherit from Member
  this.specialCollectionAccess = true;
}

PremiumMember.prototype = Object.create(Member.prototype);
PremiumMember.prototype.constructor = PremiumMember;

// Override borrowBook
PremiumMember.prototype.borrowBook = function (book) {
  if (this.borrowedBooks.length >= 5) {
    console.log(`${this.name} cannot borrow more than 5 books.`);
    return;
  }

  // Reuse Member's borrowBook method using call
  Member.prototype.borrowBook.call(this, book);
};

module.exports = PremiumMember;
