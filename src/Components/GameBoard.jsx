import React from 'react';
import './Style.css'
import Block from "./Block"
import { render } from '@testing-library/react';

function getXYPosition(i) {
    const x = i % 8
    const y = Math.abs(Math.floor(i / 8) - 7)
    return { x, y }
}

function isBlack(i) {
    const { x, y } = getXYPosition(i)
    return (x + y) % 2 === 1
}
function f(board) {
    var n = 0;
    return (
        <React.Fragment>
            
            {board.map(function (piece, i) {
                <div key={i} className="Tile">
                    <Block piece={piece} black={isBlack(i)} />
                </div>
            })}
        </React.Fragment>
    )
}

function Board({ board }) {
    var nn = 0;
        return<div className="board">
            {board.map(function (piece, i) {
                 <div key={i} className="Tile">
                    <Block piece={piece} black={isBlack(i)} />
                </div>
            })}
        </div>
    
}
/**
{board.map(function(piece, i)  {
    <div key={i} className="Tile">
        <Block piece={piece} black={isBlack(i)}/>
    </div>
})}
 */

export default Board;