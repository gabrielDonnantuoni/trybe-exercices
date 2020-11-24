const biggerWordOn = (phrase) => {
  const words = phrase.split(' ');
  let bigger = words[0];
  for (let index = 1; index < words.length; index += 1) {
    if (words[index].length > bigger.length) {
      bigger = words[index];
    }
  }
  return bigger;
};

console.log(biggerWordOn('Antônio foi no banheiro e não sabemos o que aconteceu'));
