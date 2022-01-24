import React ,{Component}from 'react';

import './Style.css';
import Block from './Block.js';

export default class Board extends Component {

  renderBlock(i, BlockShade) {
    return <Block
      key={i}
      keyVal={i}
      style={this.props.Blocks[i] ? this.props.Blocks[i].style : null}
      shade={BlockShade}
      onClick={() => this.props.onClick(i)}
    />
  }

  render() {
    const board = [];
    for (let i = 0; i < 8; i++) {
      const BlockRows = [];
      for (let j = 0; j < 8; j++) {
        const BlockShade = (isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j)) ? "light-Block" : "dark-Block";
        BlockRows.push(this.renderBlock((i * 8) + j, BlockShade));
      }
      board.push(<div className="board-row" key={i}>{BlockRows}</div>)
    }

    return (
      <div>
        {board}
      </div>
    );
  }
}


function isEven(num) {
  return num % 2 === 0
}