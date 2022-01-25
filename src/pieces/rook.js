import Piece from './piece.js';
import { isSameRow, isSameColumn, isSameDiagonal, isPathClean } from '../helpers'
import blackRook from "./img/br.png";
import whiteRook from "./img/wr.png";

export default class Rook extends Piece {
  constructor(player) {
    super(player, (player === 1 ? whiteRook : blackRook));
  }

  isMovePossible(src, dest, Blocks) {
   
    return isPathClean(this.getSrcToDestPath(src, dest), Blocks) && (isSameColumn(src, dest) || isSameRow(src, dest));
  }

  getSrcToDestPath(src, dest) {
    let path = [], pathStart, pathEnd, incrementBy;
    if (src > dest) {
      pathStart = dest;
      pathEnd = src;
    }
    else {
      pathStart = src;
      pathEnd = dest;
    }
    if (Math.abs(src - dest) % 8 === 0) {
      incrementBy = 8;
      pathStart += 8;
    }
    else {
      incrementBy = 1;
      pathStart += 1;
    }

    for (let i = pathStart; i < pathEnd; i += incrementBy) {
      //console.log(i)
      path.push(i);
    }
    return path;
  }
}
