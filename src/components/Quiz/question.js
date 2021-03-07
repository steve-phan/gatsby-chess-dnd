import React from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
  border: 1px solid lightcoral;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: aquamarine;
`

const Question = props => {
  //   console.log(props)
  return (
    <Draggable draggableId={props.question.id} index={props.index}>
      {(provided, snapshot) => {
        // console.log(provided)
        return (
          <Container
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {props.question.question}
          </Container>
        )
      }}
    </Draggable>
  )
}

export default Question
