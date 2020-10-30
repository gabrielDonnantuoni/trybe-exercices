let numbers = [2, 3, 6, -11, 10, 1, -3, -1];

function indexOfMinor (array) {
    let minNumber = Infinity, minIndex;
    for (let key in array) {
        if (array[key] < minNumber){
            minNumber = array[key];
            minIndex = key;
        }
    }
    return minIndex;
}

console.log(indexOfMinor(numbers));