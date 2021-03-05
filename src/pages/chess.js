import * as React from 'react'
import Board from '../components/Chess/Board'
import Knight from '../components/Chess/Knight'

const ChessGame = () => {
  const [knightPos, setKnightPos] = React.useState([2, 0])
  const [kightX, knightY] = knightPos

  const canKnightMove = (x, y) => {
    if (
      (Math.abs(kightX - x) === 2 && Math.abs(knightY - y) === 1) ||
      (Math.abs(kightX - x) === 1 && Math.abs(knightY - y) === 2)
    ) {
      console.log('moving ....')
      setKnightPos([x, y])
    }
  }

  const handleSquareClick = (x, y) => {
    canKnightMove(x, y)
  }
  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <Board knightPosition={knightPos} handleSquareClick={handleSquareClick} />
    </div>
  )
}

export default ChessGame
