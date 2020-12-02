const books = require('./books');
const assert = require('assert');

const expectedResult = 43;

function averageAge() {
  const sum = books.reduce((acc, cur) => acc + cur.releaseYear - cur.author.birthYear, 0);
  return sum / books.length;
}

assert.strictEqual(averageAge(), expectedResult);
