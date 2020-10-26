let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27], crescentNumbers = numbers;

for (let i = crescentNumbers.length - 1;i > 0;i--){
    for (let j = 0;j < i;j++) {
        if (crescentNumbers[j] > crescentNumbers[j+1]) {
            let aux = crescentNumbers[j+1];
            crescentNumbers[j+1] = crescentNumbers[j];
            crescentNumbers[j] = aux;
        }
    }   
}

console.log(crescentNumbers);