const biggerWordOn = (phrase) => {
  const words = phrase.split(' ');
  let bigger = words[0];
  for (let element of words) {
    if (element.length > bigger.length) {
      bigger = element;
    }
  }
  return bigger;
}

console.log(biggerWordOn("Antônio foi no banheiro e não sabemos o que aconteceu"));