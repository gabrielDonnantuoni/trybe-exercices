const assert = require('assert');

const removeVowels = (word) => {
  let counter = 0;
  const newWord = word.split('').map((char) => {
    if (/[aeiou]/.test(char)) {
      counter += 1;
      return counter;
    }
    return char;
  }).join('');
  return newWord;
};


const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(removeVowels(parameter), result);
