import React, { Fragment } from 'react';

import './Style.css';
import Square from './Square.js';

//<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.js"></script>

export default class Board extends React.Component {

  renderSquare(i, squareShade) {
    return <Square
      key={i}
      keyVal={i}
      style={this.props.squares[i] ? this.props.squares[i].style : null}
      shade={squareShade}
      onClick={() => this.props.onClick(i)}
    />
  }

  render() {
    const board = [];
    for (let i = 0; i < 8; i++) {
      const squareRows = [];
      for (let j = 0; j < 8; j++) {
        const squareShade = (isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j)) ? "light-square" : "dark-square";
        squareRows.push(this.renderSquare((i * 8) + j, squareShade));
      }
      board.push(<div className="board-row" key={i}>{squareRows}</div>)
    }

    return (
      <Fragment>
        <div>
          {board}
        </div>
          <div class="main-container">
          <h2 class="app-title">The Messenger</h2>
          <div class="room-window">
            <div class="room-text" id="room"></div>
            <div class="room-feedback" id="feedback">status</div>
          </div>
          <input class="text-user" type="text" id="user" placeholder="username" />
          <input
            class="text-message"
            type="text"
            id="message"
            placeholder="message"
          />
          <button class="send-btn" id="send">Send</button>
        </div>
    
        <script src="chat.js"></script>
      </Fragment>

    );
  }
}


function isEven(num) {
  return num % 2 === 0
}