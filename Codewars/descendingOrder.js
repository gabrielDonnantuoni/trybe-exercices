// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
    let nString = n.toString(), nArray = [], newN = 0;
  
    for (let i = 0; i < nString.length; i += 1){
      nArray.push(parseInt(nString[i], 10));
    }
  
    for (let i = nArray.length - 1;i > 0;i--){
        for (let j = 0;j < i;j++) {
            if (nArray[j] < nArray[j+1]) {
                let aux = nArray[j+1];
                nArray[j+1] = nArray[j];
                nArray[j] = aux;
            }
        }   
    }
    
    for (let i = 1; i <= nArray.length; i += 1){
        newN += (nArray[i-1] * (10 ** (nArray.length - i)));
    }
    
    return newN;
  }
// BEST VERSION
//   function descendingOrder(n){
//     return parseInt(String(n).split('').sort().reverse().join(''))
//   }