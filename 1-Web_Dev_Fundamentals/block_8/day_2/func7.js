const books = require('./books');
const assert = require('assert');

const expected_result = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  const arr = books.filter((book) => /^[A-Z]\. [A-Z]\. [A-Z]\. \w*$/.test(book.author.name)).map((book) => book.name);
  const [name] = arr;
  return name;
}

assert.deepStrictEqual(authorWith3DotsOnName(), expected_result);
