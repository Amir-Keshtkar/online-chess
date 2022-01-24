import React ,{Component}from 'react';
import './Style.css';
import Blocks from './Block.js';

export default class FallenSoldierBlock extends Component {

  renderBlock(Block, i) {
    return <Blocks
      key={i}
      keyVal={i}
      piece={Block}
      style={Block.style}
    />
  }

  render() {
    return (
      <div>
        <div className="board-row">{this.props.whiteFallenSoldiers.map((ws, index) =>
          this.renderBlock(ws, index)
        )}</div>
        <div className="board-row">{this.props.blackFallenSoldiers.map((bs, index) =>
          this.renderBlock(bs, index)
        )}</div>
      </div>
    );
  }
}

