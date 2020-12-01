let n = 7;

for (let i = 0; i < Math.ceil(n/2); i += 1){
    let string = "";
    for (let j = 0; j < n; j += 1){
        if (j < Math.floor(n/2-i-.01) || j >= Math.ceil(n/2+i+.01)) {
            string += " ";
        } else {
            string += "*";
        }
    }
    console.log(string);
}