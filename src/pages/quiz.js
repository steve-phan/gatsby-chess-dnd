import React, { useState } from 'react'
import '@atlaskit/css-reset'
import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd'
import Zone from '../components/Quiz/zone'
const quizData = {
  questions: {
    question1: {
      id: 'question1',
      question: 'A cat',
    },
    question2: {
      id: 'question2',
      question: 'A Dog',
    },
    question3: {
      id: 'question3',
      question: 'A Kuh',
    },
    question4: {
      id: 'question4',
      question: 'A Rabbit',
    },
  },

  zones: {
    'questions-zone': {
      id: 'questions-zone',
      title: 'Question',
      // question: 'Chose the correct box!',
      questionIds: ['question1', 'question2', 'question3', 'question4'],
    },
    'right-answer-zone': {
      id: 'right-answer-zone',
      title: 'right box',
      questionIds: [],
    },
    'wrong-answer-zone': {
      id: 'wrong-answer-zone',
      title: 'wrong box',
      questionIds: [],
    },
  },
  zonesOder: ['questions-zone', 'right-answer-zone', 'wrong-answer-zone'],
}
const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: lightgrey;
`

const QuizPage = () => {
  const [data, setData] = useState(quizData)
  const onDragStart = start => {
    // console.log(start)
    const homeIndex = data.zonesOder.indexOf(start.source.droppableId)
    setData({
      ...data,
      homeIndex,
    })
  }
  const onDragEnd = result => {
    // console.log(result)
    setData({
      ...data,
      homeIndex: null,
    })
    const { destination, source, draggableId } = result
    // console.log(destination)
    if (!destination) {
      return
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      // BACK TO SAVE ZONE(LOCATION)//
      return
    }
    const home = data.zones[source.droppableId]
    const target = data.zones[destination.droppableId]

    if (source.droppableId === destination.droppableId) {
      const newQuestionIds = [
        ...data.zones[destination.droppableId].questionIds,
      ]

      newQuestionIds.splice(source.index, 1)
      newQuestionIds.splice(destination.index, 0, draggableId)
      console.log(newQuestionIds)
      const newZones = {
        ...data.zones[source.droppableId],
        questionIds: newQuestionIds,
      }
      const newData = {
        ...data,
        zones: {
          ...data.zones,
          [newZones.id]: newZones,
        },
      }
      console.log(newData)
      setData(newData)
      return
    }
  }
  return (
    <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <Container>
        {data.zonesOder.map((zoneId, index) => {
          const zone = data.zones[zoneId]
          const questions = zone.questionIds.map(
            questionId => data.questions[questionId]
          )
          return <Zone key={zone.id} zone={zone} questions={questions} />
        })}
      </Container>
    </DragDropContext>
  )
}

export default QuizPage
