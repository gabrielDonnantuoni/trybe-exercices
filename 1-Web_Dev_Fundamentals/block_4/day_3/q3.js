let n = 5;

for (let i = 0; i < n; i += 1){
    let string = "";
    for (let j = 0; j < n; j += 1){
        if (j < (n-1-i)) {
            string += " ";
        } else {
            string += "*";
        }
    }
    console.log(string);
}