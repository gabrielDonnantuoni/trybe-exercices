const assert = require('assert');

const sumAllNumbers = (arr) => {
  const n = arr.reduce((sum, cur) => sum + cur);
  return n;
};
const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);
