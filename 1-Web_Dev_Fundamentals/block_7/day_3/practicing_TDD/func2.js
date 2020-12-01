const assert = require('assert');

const wordLengths = (arr) => {
  const newArr = [];
  arr.forEach((word) => {
    newArr.push(word.length);
  });
  return newArr;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
