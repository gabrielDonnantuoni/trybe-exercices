const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

assert.strictEqual(sum(4, 5), 9, 'Expected 9 to 4 + 5');
assert.strictEqual(sum(0, 0), 0, 'Expected 0 to 0 + 0');
assert.throws(() => { sum(1, '1'); });
