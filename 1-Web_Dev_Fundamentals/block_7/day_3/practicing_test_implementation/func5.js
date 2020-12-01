const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

assert.deepStrictEqual(obj1, obj2, 'obj1 was expected to be deepStrictEqual obj2');
assert.notDeepStrictEqual(obj1, obj3, 'obj1 wasn,t expected to be deepStrictEqual obj3');
assert.notDeepStrictEqual(obj2, obj3, 'obj2 wasn,t expected to be deepStrictEqual obj3');
