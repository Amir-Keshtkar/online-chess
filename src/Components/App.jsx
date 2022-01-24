import { bs } from './Core';
import Board from "./GameBoard"
import React, {Component, useEffect, useState } from 'react'

function Start() {
  const [board, setBoard] = useState([])
  useEffect(() => {
    const subscribe = bs.subscribe((Core) => {
      setBoard(Core.board)
    })
    return () => subscribe.unsubscribe()
  }, [])
  return (
    <div className="container">
      
      <div className="board-container">
        <Board b={board} />
      </div>
    </div>
  )
}

class App extends Component {
  render() {
    return Start()
  }
}

export default Start;