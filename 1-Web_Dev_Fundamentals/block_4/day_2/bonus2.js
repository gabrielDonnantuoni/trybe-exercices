let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27], decrescentNumbers = numbers;

for (let i = decrescentNumbers.length - 1;i > 0;i--){
    for (let j = 0;j < i;j++) {
        if (decrescentNumbers[j] < decrescentNumbers[j+1]) {
            let aux = decrescentNumbers[j+1];
            decrescentNumbers[j+1] = decrescentNumbers[j];
            decrescentNumbers[j] = aux;
        }
    }   
}

console.log(decrescentNumbers);