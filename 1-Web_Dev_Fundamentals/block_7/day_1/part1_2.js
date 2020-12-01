let oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens = `Os números ${oddsAndEvens.sort((a, b) => a - b).join(', ')} se encontram ordenados de forma crescente!`;

console.log(oddsAndEvens);
