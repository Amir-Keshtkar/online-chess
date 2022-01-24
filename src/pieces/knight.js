import Piece from './piece.js';
import { isSameRow } from '../helpers'
import blackKnight from "./img/bn.png";
import whiteKnight from "./img/wn.png";

export default class Knight extends Piece {
  constructor(player) {
    super(player, (player === 1 ? whiteKnight : blackKnight));
  }

  isMovePossible(src, dest) {
    return ((src - 17 === dest && !isSameRow(src, dest)) ||
      (src - 10 === dest && !isSameRow(src, dest)) ||
      (src + 6 === dest && !isSameRow(src, dest)) ||
      (src + 15 === dest && !isSameRow(src, dest)) ||
      (src - 15 === dest && !isSameRow(src, dest)) ||
      (src - 6 === dest && !isSameRow(src, dest)) ||
      (src + 10 === dest && !isSameRow(src, dest)) ||
      (src + 17 === dest && !isSameRow(src, dest)))
  }

  getSrcToDestPath() {
    return [];
  }
}
