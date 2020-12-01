// [ coluna(posição x) , linha(posição y) ]
let queenPosition = [3,5], piecePosition = [5,3], successfulAttack = false; 

// Verifica se está na mesma linha ou coluna
if (queenPosition[0] == piecePosition[0] || queenPosition[1] == piecePosition[1]){
    successfulAttack = true;
} else {
    // Verifica se está na mesma diagonal
    for (let diagonalCounter = 1; diagonalCounter <= 4; diagonalCounter += 1){
        let diagonal = [0,0]; // O primeiro 0 representa Right e o segundo Up. 1 representa o sentido contrário. 
        // Exemplo diagonal == [1,0] representa diagonal esquerda para cima.

        switch (diagonalCounter) {
            case 2:
                diagonal = [1,0];
                break;
            case 3:
                diagonal = [0,1];
                break;
            case 4:
                diagonal = [1,1];
                break;      
        }
    
        for (let i = 1; i <= (8 - Math.max(queenPosition[0], queenPosition[1])); i += 1){
            let newPosition = [0,0], // Nova posição na diagonal
            aux = [i,i]; // Variável auxiliar para identificar se incrementa ou decrementa a linha/coluna
    
            if (diagonal[0] == 1){
                aux[0] = -i;
            }
            if (diagonal[1] == 1){
                aux[1] = -i;
            }
    
            newPosition[0] = queenPosition[0] + aux[0];
            newPosition[1] = queenPosition[1] + aux[1];
    
            if (newPosition[0] < 1 || newPosition[1] < 1){
                break;
            }
    
            if (newPosition[0] == piecePosition[0] && newPosition[1] == piecePosition[1]){
                successfulAttack = true;
            }
        }
    }
}

console.log(successfulAttack);