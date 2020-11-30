const assert = require('assert');

const greaterThanTen = (array) => {
  const results = array.filter((value) => value > 10);
  return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

assert.deepStrictEqual(greaterThanTen(parameter), result);
