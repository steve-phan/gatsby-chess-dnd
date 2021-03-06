import React from 'react'
import { useDroppable } from '@dnd-kit/core'

function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
  })
  const style = {
    color: isOver ? 'green' : undefined,
    position: 'fixed',
    width: '200px',
    height: '200px',
    backgroundColor: 'red',
    bottom: 0,
    left: 0,
  }

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  )
}
export default Droppable
