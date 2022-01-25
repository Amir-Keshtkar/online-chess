const diagonalDictionaryTLBR = require('../dictionaries/diagonalTopLeftBottomRight.json');
const diagonalDictionaryTRBL = require('../dictionaries/diagonalTopRightBottomLeft.json');
const rowDictionary = require('../dictionaries/row.json');
const columnDictionary = require('../dictionaries/column.json');

const isSameRow = (src, dest) => {
  return !!(rowDictionary[src] && rowDictionary[src][dest]);
}

const isSameColumn = (src, dest) => {
  return !!(columnDictionary[src] && columnDictionary[src][dest]);
}

const isSameDiagonal = (src, dest) => {
  return !!((diagonalDictionaryTLBR[src] && diagonalDictionaryTLBR[src][dest]) ||
    (diagonalDictionaryTRBL[src] && diagonalDictionaryTRBL[src][dest]))
}

const isPathClean = (srcToDestPath, Blocks) => srcToDestPath.reduce((acc, curr) => !Blocks[curr] && acc, true)
/*
let isPathClean= (srcToDestPath, Blocks) => checking(srcToDestPath, Blocks) ;

function checking(srcToDestPath, Blocks){
  //console.log("ZZZZZZZZZZZZ")
  //const b=Boolean(Blocks)
  for(let i=0; i<srcToDestPath.length;i++){
    //console.log(Blocks[i]+"   "+i)
    if(Blocks[i]==true){
      return false;
    }
  }
 //console.log("HHHHHHHH")
  return true;
}
//*/
module.exports = {
  isSameRow,
  isSameColumn,
  isSameDiagonal,
  isPathClean
}