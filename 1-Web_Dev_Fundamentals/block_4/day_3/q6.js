let n = 11;

if (n > 1) {
    let counter = 0;

    for (let i = 2; i < n; i += 1){
        if (n%i == 0){
            counter += 1;
        }
    }
    if (counter == 0){
        console.log(n + " é primo");
    } else {
        console.log(n + " não é primo");
    }
} else {
    console.log(n + " não é primo");
}