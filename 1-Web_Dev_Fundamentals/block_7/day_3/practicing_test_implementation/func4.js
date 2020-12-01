const assert = require('assert');

function myFizzBuzz(num) {
  let answer = num;
  if (typeof num !== 'number') answer = false;
  if (num % 3 === 0 && num % 5 === 0) answer = 'fizzbuzz';
  else if (num % 3 === 0) answer = 'fizz';
  else if (num % 5 === 0) answer = 'buzz';
  return answer;
}

assert.strictEqual(myFizzBuzz(15), 'fizzbuzz', 'num = 15 was expected to return fizzbuzz');
assert.strictEqual(myFizzBuzz(21), 'fizz', 'num = 21 was expected to return fizz');
assert.strictEqual(myFizzBuzz(55), 'buzz', 'num = 55 was expected to return buzz');
assert.strictEqual(myFizzBuzz(4), 4, 'num = 4 was expected to return 4');
assert.strictEqual(myFizzBuzz('d'), false, 'num = string was expected to return false');
