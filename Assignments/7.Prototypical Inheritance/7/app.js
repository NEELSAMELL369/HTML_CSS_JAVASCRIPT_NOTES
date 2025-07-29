// app.js

const books = require('./books');

// Create array of summaries
const summaries = books.map(book => book.getSummary());

// Log summaries
summaries.forEach(summary => console.log(summary));
