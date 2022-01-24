import React from "react"
import Square from "./Square"
import Piece from "./Piece"
 

export default function Block({piece, black}){
  return(
    <div>
      <Square black={black}>
        {piece && <Piece Piece={piece} />}
      </Square>
    </div>
  )
}