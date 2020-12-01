let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27], sum = 0;



for (let i = 0;i < numbers.length;i++){
    sum += numbers[i];
}

let average = sum/numbers.length;

if (average > 20) {
    console.log('Valor maior que 20')
} else {
    console.log('Valor menor ou igual a 20')
}