import React from "react"

export default function Square({chd, black}){
  const bgclass=black?'Black-Block':'White-Block'
  return(
    <div className={bgclass}>
      {chd}
    </div>
  )
}