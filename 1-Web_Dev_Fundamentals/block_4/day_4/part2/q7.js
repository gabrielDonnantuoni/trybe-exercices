let string1 = "Danone", string2 = "ne";

function checkEnding (word, ending) {
    let test = false, counter = 0;
    for (let i = 1; i <= ending.length; i += 1) {
        if (word[word.length-i] == ending[ending.length-i]) {
            counter += 1;
        }
        if (counter == ending.length) {
            test = true;
        }
    }
    return test;
}

console.log(checkEnding(string1, string2));