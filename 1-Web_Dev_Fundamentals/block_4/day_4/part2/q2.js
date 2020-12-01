let numbers = [2, 3, 6, 11, 10, 1];

function indexOfGreater (array) {
    let maxNumber = -Infinity, maxIndex;
    for (let key in array) {
        if (array[key] > maxNumber){
            maxNumber = array[key];
            maxIndex = key;
        }
    }
    return maxIndex;
}

console.log(indexOfGreater(numbers));