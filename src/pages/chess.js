import * as React from 'react'
// REDUX

import { useDispatch, useSelector } from 'react-redux'

import { startMove } from '../../redux/chess/chess.actions'

import Board from '../components/Chess/Board'
import Knight from '../components/Chess/Knight'

import { canKnightMove } from '../components/Chess/chess.helpers'

// import { store } from '../../redux/chessStore'

const mapState = ({ chessPosition }) => ({
  knightPosition: chessPosition.knightPosition,
})

const ChessGame = () => {
  const dispatch = useDispatch()
  const { knightPosition } = useSelector(mapState)

  const [knightPos, setKnightPos] = React.useState([7, 7])

  // const canKnightMove = (x, y, [kightX, knightY]) =>
  //   (Math.abs(kightX - x) === 2 && Math.abs(knightY - y) === 1) ||
  //   (Math.abs(kightX - x) === 1 && Math.abs(knightY - y) === 2)

  const handleSquareClick = (x, y) => {
    if (!!canKnightMove(x, y, knightPosition)) dispatch(startMove([x, y]))

    // if (!!canKnightMove(x, y, knightPos)) {
    //   setKnightPos([x, y])
    //   console.log(`X is ${x}, Y is${y}, and KnightPosition is ${knightPos}`)
    // }
  }
  console.log(knightPosition)
  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <Board
        knightPosition={knightPosition}
        handleSquareClick={handleSquareClick}
      />
    </div>
  )
}

export default ChessGame
