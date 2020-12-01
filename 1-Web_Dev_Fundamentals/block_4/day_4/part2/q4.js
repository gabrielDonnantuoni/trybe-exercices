let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function biggerName (array) {
    let biggerString, maxLength = 0;
    for (let key in array) {
        if (array[key].length > maxLength){
            maxLength = array[key].length;
            biggerString = array[key];
        }
    }
    return biggerString;
}

console.log(biggerName(names));