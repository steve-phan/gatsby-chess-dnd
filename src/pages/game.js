import React, { useEffect, useState, useRef } from 'react'

import styled from 'styled-components'

import firebase from '../../firebase/utils.firebase'

const Answer = styled.div``

const Game = () => {
  const [questions, setQuestions] = useState([])
  const [curQuestion, setCurQuestion] = useState()
  const questionRef = useRef()
  const [index, setIndex] = useState(false)

  useEffect(() => {
    firebase
      .firestore()
      .collection('quiz')
      .get()
      .then(querySnapshot => {
        let data = []
        querySnapshot.forEach(doc => {
          data = [
            ...data,
            {
              [doc.id]: doc.data(),
            },
          ]
        })
        return data
      })
      .then(result => {
        const klasse2 = result.reduce((acc, cur) => {
          if (cur.hasOwnProperty('klasse2')) {
            // console.log(cur['klasse2'])
            return {
              ...acc,
              ...cur['klasse2'],
            }
          } else {
            return {
              ...acc,
            }
          }
        }, {})
        setQuestions(klasse2)
      })
      .catch(error => {
        console.log('Error getting documents: ', error)
      })
  }, [])
  const handleGetStart = () => {
    // if (!isShowQuestion) {
    //   setIsShowQuestion(true)
    // } else {

    const rdNumber = Math.floor(Math.random() * questions?.math.length)
    questionRef.current = rdNumber
    // console.log(questions.math[questionRef.current])

    setCurQuestion(questions.math[questionRef.current])
    // Primitivie variable type !
    questions.math.splice(questionRef.current, 1)
    setQuestions({
      ...questions,
    })

    // }
  }

  // console.log(curQuestion)
  return (
    <div>
      <h1>Hello</h1>

      {curQuestion && (
        <div className="game-board">
          <h3>{curQuestion?.question}</h3>
          <div>
            {curQuestion.answers.map((answer, index) => {
              return (
                <Answer
                  correct_answer={index}
                  onClick={e => {
                    console.log('hello')
                    console.log(e.target.className)
                    if (curQuestion.correct_answer === index) {
                      e.target.style.background = 'red'
                    }
                    setIndex(index)
                  }}
                  key={index}
                >
                  {answer}
                </Answer>
              )
            })}
          </div>
        </div>
      )}

      <button onClick={handleGetStart}>get Start</button>
    </div>
  )
}

export default Game
