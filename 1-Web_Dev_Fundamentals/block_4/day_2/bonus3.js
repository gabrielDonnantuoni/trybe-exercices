let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27], newNumbers = [];

for (let i = 0;i < numbers.length;i++){
    if (numbers[i+1] == undefined) {
        newNumbers.push(numbers[i]*2);
    } else {
        newNumbers.push(numbers[i]*numbers[i+1]);
    }
}

console.log(newNumbers);


