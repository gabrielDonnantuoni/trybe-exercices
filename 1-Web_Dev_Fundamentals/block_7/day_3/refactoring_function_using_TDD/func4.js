const assert = require('assert');

function secondThirdSmallest(array) {
  const sorted = array.sort((x, y) => x - y);
  const [, second, third] = sorted;
  return [second, third];
}

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

assert.deepStrictEqual(secondThirdSmallest(parameter), result);
