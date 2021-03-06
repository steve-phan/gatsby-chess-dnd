import React from 'react'
import { useDrag } from 'react-dnd'

import { ItemTypes } from './ItemTypes'

const Knight = ({ size }) => {
  const [
    { isDragging },
    // hello,
    drag,
  ] = useDrag(() => ({
    item: { type: ItemTypes.KNIGHT },
    collect: monitor => {
      return {
        isDragging: !!monitor.isDragging(),
      }
    },
  }))

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.2 : 1,
        fontSize: 45,
        fontWeight: 'bold',
        cursor: 'move',
        width: 'fit-content',
      }}
    >
      ♘
    </div>
  )
}

export default Knight
