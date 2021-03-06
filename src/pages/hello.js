import React, { useState } from 'react'
import { DndContext } from '@dnd-kit/core'
import Droppable from '../components/KitDnD/Dropable'
import Draggable from '../components/KitDnD/Draggable'

// import Droppable from '../components/Kitdnd/Droppable'
// import Draggable from '../components/Kitdnd/Draggable'

function Hello() {
  const [isDropped, setIsDropped] = useState(false)
  const draggableMarkup = <Draggable>Drag me</Draggable>
  function handleDragEnd(event) {
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true)
    }
  }
  console.log('moving ...')
  return (
    <DndContext onDragEnd={handleDragEnd}>
      {!isDropped ? draggableMarkup : null}

      <Droppable>{isDropped ? draggableMarkup : 'Drop here'}</Droppable>
    </DndContext>
  )
}
export default Hello
