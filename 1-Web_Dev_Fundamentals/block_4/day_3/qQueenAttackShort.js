// [ coluna(posição x) , linha(posição y) ]
let queenPosition = [3,5], piecePosition = [5,3], successfulAttack = false; 

// Verifica se está na mesma linha ou coluna
if (queenPosition[0] == piecePosition[0] || queenPosition[1] == piecePosition[1]){
    successfulAttack = true;
} else { //verifica se está na mesma diagonal
    let diference = [0,0]; // variável para armazenar a diferença entre linhas e entre colunas
    diference[0] = queenPosition[0] - piecePosition[0];
    diference[1] = queenPosition[1] - piecePosition[1];

    for (let i = 0; i < diference.length; i += 1) { //tira o módulo da diferença
        if (diference[i] < 0) {
            diference[i] = -diference[i];
        }
    }

    if (diference[0] == diference[1]) {
        successfulAttack = true;
    }
}

console.log(successfulAttack);