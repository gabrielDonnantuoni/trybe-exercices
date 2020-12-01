const books = require('./books');
const oldBooks = require('./func4');
const assert = require('assert');

const expected_result = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu'
]

function oldBooksNames() {
  return oldBooks().map((book) => book.name).reverse();
}

assert.deepStrictEqual(oldBooksNames(), expected_result);
