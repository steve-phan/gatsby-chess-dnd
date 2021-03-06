import React, { useState, useEffect } from 'react'
import Square from './Square'

import { ItemTypes } from './ItemTypes'
import { useDrop } from 'react-dnd'
// REDUX
import { useDispatch, useSelector } from 'react-redux'

import { startMove } from '../../../redux/chess/chess.actions'

// Helpers

import { canKnightMove } from './chess.helpers'
const mapState = ({ chessPosition }) => ({
  knightPosition: chessPosition.knightPosition,
})

const BoardSquare = ({ x, y, handleSquareClick, children }) => {
  const dispatch = useDispatch()
  const { knightPosition } = useSelector(mapState)
  const [isCanDrop, setIsCanDrop] = useState(false)
  // const [curKnightPos, setCurKnightPos] = useState(knightPosition)
  // const [knightX, knightY] = knightPosition

  const black = (x + y) % 2 === 1
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: ItemTypes.KNIGHT,
      drop: () => {
        console.log('staring drap ...')
        dispatch(startMove([x, y]))
      },
      canDrop: () => {
        console.log(`checking can drag ??? ... ${x} , ${y} `)
        return canKnightMove(x, y, knightPosition)
      },
      collect: monitor => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [x, y, knightPosition]
  )
  console.log(`place knight is ${[...knightPosition]} `)
  // function canMove()
  // console.log(knightPosition)

  return (
    <div
      ref={drop}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <Square black={black}>{children}</Square>
      {isOver && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow',
          }}
        ></div>
      )}
    </div>
  )
}

export default BoardSquare
