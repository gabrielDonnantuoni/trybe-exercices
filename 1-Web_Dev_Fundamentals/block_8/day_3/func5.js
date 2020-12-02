const books = require('./books');
const assert = require('assert');

const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin'
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991
};

function longestNamedBook() {
  return books.reduce((acc, cur) => (acc.name.length > cur.name.length) ? acc : cur);
}

assert.deepStrictEqual(longestNamedBook(), expectedResult);
