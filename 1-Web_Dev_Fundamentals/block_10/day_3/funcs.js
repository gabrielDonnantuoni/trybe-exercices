const randomNumber = () => {
  const random = Math.ceil(Math.random() * 100);
  console.log(random);
  return random;
}

const isDivisible = (number) => {
  exports.randomNumber;
  return (randomNumber() % number) === 0;
}

module.exports = { randomNumber, isDivisible };
