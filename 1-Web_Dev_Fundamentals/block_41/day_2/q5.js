let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27], max = -Infinity;



for (let i = 0;i < numbers.length;i++){
    if (max <= numbers[i]) {
        max = numbers[i];
    }
}

console.log(max);