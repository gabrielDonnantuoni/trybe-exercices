const books = require('./books');
const fantasyOrScienceFiction = require('./func3');
const assert = require('assert');

const expected_result = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien'
]

function fantasyOrScienceFictionAuthors() {
  return fantasyOrScienceFiction().map((book) => book.author.name).sort();
}

assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expected_result);
