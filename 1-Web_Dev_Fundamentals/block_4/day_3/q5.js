let n = 7;

for (let i = 0; i < Math.ceil(n/2); i += 1){
    let string = "";
    if (i < Math.ceil(n/2-1)) {
        for (let j = 1; j <= n; j += 1){
            if (j == Math.ceil(n/2-i) || j == Math.ceil(n/2+i+.01)) {
                string += "*";
            } else {
                string += " ";
            }
        }
    } else {
        for (let k = 0; k < n; k += 1){
            string += "*";
        }
    }
    console.log(string);
}