import React from 'react'
import styled from 'styled-components'

import { Droppable } from 'react-beautiful-dnd'

import Question from './question'

const Container = styled.div`
  margin: 8px;
  border: 1px solid deeppink;
  border-radius: 2px;
  width: 300px;
  display: flex;
  flex-direction: column;
`
const Title = styled.h3`
  padding: 6px;
`

const Questions = styled.div`
  padding: 8px;
  flex-grow: 1;
  min-height: 100px;
`

const Zone = props => {
  const { questions, zone } = props
  console.log(props)
  return (
    <Container>
      <Title> {zone.title}: </Title>
      <Droppable droppableId={zone.id}>
        {provided => {
          return (
            <Questions ref={provided.innerRef} {...provided.droppableProps}>
              {questions.map((question, index) => {
                return (
                  <Question
                    key={question.id}
                    question={question}
                    index={index}
                  />
                )
              })}
              {provided.placeholder}
            </Questions>
          )
        }}
      </Droppable>
    </Container>
  )
}

export default Zone
