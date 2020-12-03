const assert = require('assert');

const myList = [1, 2, 3, 4, 5];
const [,...myList2] = myList;

const swap = (arr) => {
    const [...newArr] = arr;
    const first = newArr.shift();
    const last = newArr.pop();
    return  [last, ...newArr, first];
};

const swappedList = swap(myList);
const swappedList2 = swap(myList2);

assert.strictEqual(swappedList[0], 5);
assert.strictEqual(swappedList[4], 1);
assert.strictEqual(swappedList2[0], 5);
assert.strictEqual(swappedList2[3], 2);
