const books = require('./books');
const assert = require('assert');

function allNames() {
  return books.reduce((acc, cur, index, arr) => {
    if (index !== arr.length - 1) return `${acc} ${cur.author.name},`
    return `${acc} ${cur.author.name}.`
  }, 'Nomes:');
}

assert.deepStrictEqual(allNames(), "Nomes: George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.");
