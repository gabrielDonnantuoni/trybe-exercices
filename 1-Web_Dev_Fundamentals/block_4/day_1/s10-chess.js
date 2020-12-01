let piece = "KNIGHT";

let lowerPiece = piece.toLowerCase();

switch (lowerPiece) {
    case "king":
        console.log("Move: one square in any direction, so long as that square is not attacked by an enemy piece. Additionally, kings are able to make a special move, know as castling.");
        break;
    case "queen":
        console.log("Move: diagonally, horizontally, or vertically any number of squares. They are unable to jump over pieces.");
        break;
    case "knight":
        console.log("Move: in an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically. They are the only piece able to jump over other pieces.");
        break;
    case "rook":
        console.log("Move: horizontally or vertically any number of squares. They are unable to jump over pieces. Rooks move when the king castles.");
        break;
    case "bishops":
        console.log("Move: diagonally any number of squares. They are unable to jump over pieces.");
        break;
    case "pawn":
        console.log("Move: vertically forward one square, with the option to move two squares if they have not yet moved. Pawns are the only piece to capture different to how they move. Pawns capture one square diagonally in a forward direction. Pawns are unable to move backwards on captures or moves. Upon reaching the other side of the board a pawn promotes into any other piece, except for a king. Additionally, pawns can make a special move named En Passant.");
        break;
    default:
        console.log("Invalid piece's name!");
}