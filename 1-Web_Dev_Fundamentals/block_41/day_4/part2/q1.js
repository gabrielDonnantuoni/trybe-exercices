let word = "arara";

function verificaPalindromo (string) {
    let test = false;
    if (string == string.split('').reverse().join('')) {
        test = true;
    }
    return test;
}

console.log(verificaPalindromo(word));