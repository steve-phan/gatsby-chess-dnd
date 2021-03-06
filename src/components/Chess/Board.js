import React from 'react'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'

import Square from './Square'
import BoardSquare from './BoardSquare'
import Knight from './Knight'
// import { ItemTypes} from './ItemTypes'

const Board = ({ knightPosition, handleSquareClick }) => {
  const backend = window.innerWidth < 600 ? TouchBackend : HTML5Backend

  const renderPiece = (x, y, [knightX, knightY]) => {
    if (x === knightX && y === knightY) {
      return <Knight />
    }
  }

  const renderSquare = (i, [knightX, knightY]) => {
    const x = i % 8
    const y = Math.floor(i / 8)
    const black = (x + y) % 2 === 1
    // const isKnightHere = knightX === x && knightY === y
    // const piece = isKnightHere ? <Knight /> : null
    // const handleSquareClick = () => {
    //   console.log(`X is ${x} , Y is ${y}`)
    // }
    return (
      <div
        key={i}
        style={{
          width: '12.5%',
          height: '12.5%',
        }}
        onClick={() => handleSquareClick(x, y)}
      >
        <BoardSquare
          x={x}
          y={y}
          handleSquareClick={() => handleSquareClick(x, y)}
        >
          {renderPiece(x, y, knightPosition)}
        </BoardSquare>
        {/* <Square black={black}>{piece}</Square> */}
      </div>
    )
  }
  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition))
  }

  return (
    <DndProvider backend={backend}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {squares}
      </div>
    </DndProvider>
  )
}

export default Board
