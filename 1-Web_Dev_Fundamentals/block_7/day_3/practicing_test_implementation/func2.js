const assert = require('assert');

function myRemove(arr, item) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], 'Expected to newArr not have 3');
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], 'Expected to newArr not be equal to arr');

const myArr = [10, 9, 8, 7];
myRemove(myArr, 7);
assert.deepStrictEqual(myArr, [10, 9, 8, 7], 'Expected to arr to keep unchanged');

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], 'Expected to not remove inexistent element');
