let numbers = [2, 3, 2, 5, 8, 2, 3, 3, 3];

function moreFrequent (array) {
    let sorted = array.sort(), maxCounter = 0, counter = 0, number;

    for (let i = 0; i < sorted.length; i += 1) {
        
        if (sorted[i] == sorted[i + 1]){
            counter += 1;
            if (counter > maxCounter){
                maxCounter = counter;
                number = sorted[i];
            }
        } else {
            counter = 0;
        }
    }
    return number;
}

console.log(moreFrequent(numbers));