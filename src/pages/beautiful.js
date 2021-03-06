import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import '@atlaskit/css-reset'
import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd'
import initialData from '../components/Todo/data'
import Column from '../components/Todo/column'

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const Nice = () => {
  //   state = initialData

  const [state, setState] = useState(initialData)
  const onDragStart = start => {
    const homeIndex = state.columnOrder.indexOf(start.source.droppableId)
    console.log(homeIndex)
    setState({
      ...state,
      homeIndex,
    })
  }

  const onDragEnd = result => {
    setState({
      ...state,
      homeIndex: null,
    })

    const { destination, source, draggableId } = result

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const home = state.columns[source.droppableId]
    const foreign = state.columns[destination.droppableId]

    if (home === foreign) {
      const newTaskIds = Array.from(home.taskIds)
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)

      const newHome = {
        ...home,
        taskIds: newTaskIds,
      }

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newHome.id]: newHome,
        },
      }

      setState(newState)
      return
    }

    // moving from one list to another
    const homeTaskIds = Array.from(home.taskIds)
    homeTaskIds.splice(source.index, 1)
    const newHome = {
      ...home,
      taskIds: homeTaskIds,
    }

    const foreignTaskIds = Array.from(foreign.taskIds)
    foreignTaskIds.splice(destination.index, 0, draggableId)
    const newForeign = {
      ...foreign,
      taskIds: foreignTaskIds,
    }

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newHome.id]: newHome,
        [newForeign.id]: newForeign,
      },
    }
    setState(newState)
  }
  console.log(state.columnOrder)
  return (
    <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <Container>
        {state.columnOrder.map((columnId, index) => {
          const column = state.columns[columnId]
          const tasks = column.taskIds.map(taskId => state.tasks[taskId])

          const isDropDisabled = index < state.homeIndex

          return (
            <Column
              key={column.id}
              column={column}
              tasks={tasks}
              isDropDisabled={isDropDisabled}
            />
          )
        })}
      </Container>
    </DragDropContext>
  )
}
export default Nice
