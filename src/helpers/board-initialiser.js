import Bishop from '../pieces/bishop.js';
import King from '../pieces/king.js';
import Knight from '../pieces/knight.js';
import Pawn from '../pieces/pawn.js';
import Queen from '../pieces/queen.js';
import Rook from '../pieces/rook.js';

export default function initialiseChessBoard() {
  const Blocks = Array(64).fill(null);

  for (let i = 8; i < 16; i++) {
    Blocks[i] = new Pawn(2);
    Blocks[i + 40] = new Pawn(1);
  }
  Blocks[0] = new Rook(2);
  Blocks[7] = new Rook(2);
  Blocks[56] = new Rook(1);
  Blocks[63] = new Rook(1);

  Blocks[1] = new Knight(2);
  Blocks[6] = new Knight(2);
  Blocks[57] = new Knight(1);
  Blocks[62] = new Knight(1);

  Blocks[2] = new Bishop(2);
  Blocks[5] = new Bishop(2);
  Blocks[58] = new Bishop(1);
  Blocks[61] = new Bishop(1);

  Blocks[3] = new Queen(2);
  Blocks[4] = new King(2);

  Blocks[59] = new Queen(1);
  Blocks[60] = new King(1);

  return Blocks;
}