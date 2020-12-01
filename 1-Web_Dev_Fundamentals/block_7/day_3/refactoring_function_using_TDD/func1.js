const assert = require('assert');

const greetPeople = (people) => {
  const greetedPeople = people.map((person) => `Hello ${person}`);
  return greetedPeople;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);
