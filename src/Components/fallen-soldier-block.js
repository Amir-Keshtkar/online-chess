import React from 'react';

import './Style.css';
import Blocks from './Square.js';

export default class FallenSoldierBlock extends React.Component {

  renderSquare(square, i, squareShade) {
    return <Blocks
      key={i}
      keyVal={i}
      piece={square}
      style={square.style}
    />
  }

  render() {
    return (
      <div>
        <div className="board-row">{this.props.whiteFallenSoldiers.map((ws, index) =>
          this.renderSquare(ws, index)
        )}</div>
        <div className="board-row">{this.props.blackFallenSoldiers.map((bs, index) =>
          this.renderSquare(bs, index)
        )}</div>
      </div>
    );
  }
}

