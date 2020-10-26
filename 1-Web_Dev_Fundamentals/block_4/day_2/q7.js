let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27], min = Infinity;



for (let i = 0;i < numbers.length;i++){
    if (min >= numbers[i]) {
        min = numbers[i];
    }
}

console.log(min);