let a = 3, b = 2, c = 5;

if (a > b && a > c){
    console.log(a + " is the greater");
} else if (b > a && b > c) {
    console.log(b + " is the greater");
} else if (c > b && c > a) {
    console.log(c + " is the greater");
} else {
    console.log("At least one of the numbers are equal");
}