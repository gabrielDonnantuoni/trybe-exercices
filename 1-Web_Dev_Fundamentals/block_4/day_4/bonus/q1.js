function romanToDecimal (rNum) {
    const numeral = {
        roman: ['i', 'v', 'x', 'l', 'c', 'd', 'm'],
        decimal: [1, 5, 10, 50, 100, 500, 1000],
    }
    let romanObj = {
        numerals: rNum.toLowerCase().split(''),
        relPosition: [],
        value: [],
    }

    for (let i = 0; i < romanObj.numerals.length; i += 1) {
        if (!numeral.roman.includes(romanObj.numerals[i])) {
            return 'Insert valid roman numerals';
        }
    }
    
    for (let i = 0; i < romanObj.numerals.length; i += 1) {
        romanObj.relPosition[i] = numeral.roman.indexOf(romanObj.numerals[i]);
    }

    for (let i = 0; i < romanObj.numerals.length - 1; i += 1) {
        if (romanObj.relPosition[i] < romanObj.relPosition[i + 1]){
            romanObj.value[i] = -numeral.decimal[romanObj.relPosition[i]];
        } else {
            romanObj.value[i] = numeral.decimal[romanObj.relPosition[i]];
        }
    }
    romanObj.value.push(numeral.decimal[romanObj.relPosition[romanObj.numerals.length - 1]]);
    
    let sum = 0;
    for (let i = 0; i < romanObj.numerals.length; i += 1) {
        sum += romanObj.value[i];
    }

    return sum;
}

console.log(romanToDecimal('dcxxiv'));