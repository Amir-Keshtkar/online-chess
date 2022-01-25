import Piece from './piece.js';
import { isSameDiagonal, isPathClean } from '../helpers/index.js'
import blackBishop from "./img/bb.png";
import whiteBishop from "./img/wb.png";

export default class Bishop extends Piece {
  constructor(player) {
    super(player, (player === 1 ? whiteBishop : blackBishop));
  }

  isMovePossible(src, dest, Blocks) {
    return isPathClean(this.getSrcToDestPath(src, dest), Blocks) && isSameDiagonal(src, dest)
  }

  getSrcToDestPath(src, dest) {
    let path = [], pathStart, pathEnd, incrementBy;
    
    if (Math.abs(src - dest) % 9 === 0) {
      incrementBy = 9;
      if (src > dest) {
        src -= 9;
        dest += 9;
        pathStart = dest;
        pathEnd = src;
      }
      else {
        src += 9;
        dest -= 9;
        pathStart = src;
        pathEnd = dest;
      }
    }
    else {
      incrementBy = 7;
      if (src > dest) {
        src -= 7;
        dest += 7;
        pathStart = dest;
        pathEnd = src;
      }
      else {
        src += 7;
        dest -= 7;
        pathStart = src;
        pathEnd = dest;
      }
    }
    
    //console.log("src="+src+"  dest="+dest+" pathstart="+pathStart+" pathEnd="+pathEnd)
    for (let i = pathStart; i <= pathEnd; i += incrementBy) {
      path.push(i);
      //console.log(i +" ")
    }
    //console.log("ZZZZZZZZZZZZZZZZZZ")
    return path;
  }
}
