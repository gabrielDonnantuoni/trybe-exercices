const sumFromRandNumbers = () => {
  const randoms10 = Array.from(
    { length: 10 },
    () => Math.floor(1 + Math.random() * 50) ** 2);
  const sum = randoms10.reduce((acc, cur) => acc + cur);
  const error = 'É mais de oito mil! Essa promise deve estar quebrada!';
  if (sum >= 8000) throw new Error(error);
  return sum;
}

const dividePerAndSum = (sum, ...numbers) => {
  return numbers.map(number => sum / number)
                .reduce((acc, cur) => acc + cur);
}

const fectchPromise = async () => {
  try {
    const sum = await sumFromRandNumbers();
    const otherSum = await dividePerAndSum(sum, 2, 3, 5, 10);
    console.log(Math.round(otherSum * 100) / 100);
  } catch (err) {
    console.log(err);
  }
}

fectchPromise();
