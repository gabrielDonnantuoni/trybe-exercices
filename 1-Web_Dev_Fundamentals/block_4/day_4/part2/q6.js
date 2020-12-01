let n = 6;

function sumUntilN (num) {
    let sum = 0;
    for (let i = 1; i <= num; i += 1) {
        sum += i;
    }
    return sum;
}

console.log(sumUntilN(n));