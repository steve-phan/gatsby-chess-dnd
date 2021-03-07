import React, { useRef, useState, useEffect } from 'react'

const gameMode = [
  'mod0',
  'mod1',
  'mod2',
  //   'mod3',
  //   'mod4',
  //   'mod5',
  //   'mod6',
  //   'mod7',
  //   'mod8',
  //   'mod9',
]
// piO3ChAWONLAwHKusVwbtK1bNMSTnKh1rdKhN7T1

const Type = () => {
  const [questions, setQuestions] = useState([])
  const getRandomNum = num => (Math.random() * num) | 0
  const numRef = useRef()

  const [mode, setMode] = useState('')

  const handleNextQuestion = () => {
    //   Remove question was rendered
    const newQuestions = questions.filter(
      question => question !== questions[numRef.current]
    )

    setQuestions(newQuestions)
    const categories = questions.map(item => item.category)
    numRef.current = getRandomNum(questions.length)
    setMode(categories[numRef.current])
  }
  //   console.log(questions)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const respond = await fetch(
          'https://quizapi.io/api/v1/questions?apiKey=piO3ChAWONLAwHKusVwbtK1bNMSTnKh1rdKhN7T1'
        )
        const data = await respond.json()
        const categories = data.map(item => item.category)
        numRef.current = getRandomNum(questions.length)
        console.log(categories)
        setQuestions(data)

        setMode(categories[numRef.current])
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  if (!questions.length) return <div>game over ...</div>
  switch (mode) {
    case 'SQL':
      return (
        <div>
          <h1>SQL</h1>
          <button onClick={handleNextQuestion}>Next </button>
        </div>
      )
    case 'Docker':
      return (
        <div>
          <h1>Docker</h1>
          <button onClick={handleNextQuestion}>Next </button>
        </div>
      )
    case 'Code':
      return (
        <div>
          <h1>Code</h1>
          <button onClick={handleNextQuestion}>Next </button>
        </div>
      )
    case 'DevOps':
      return (
        <div>
          <h1>"DevOps"</h1>
          <button onClick={handleNextQuestion}>Next </button>
        </div>
      )
    case 'Docker':
      return (
        <div>
          <h1>Docker</h1>
          <button onClick={handleNextQuestion}>Next </button>
        </div>
      )
    case 'Linux':
      return (
        <div>
          <h1>Linux</h1>
          <button onClick={handleNextQuestion}>Next </button>
        </div>
      )
    case 'CMS':
      return (
        <div>
          <h1>CMS</h1>
          <button onClick={handleNextQuestion}>Next </button>
        </div>
      )
    case '':
      return (
        <div>
          <h1>Uncategory</h1>
          <button onClick={handleNextQuestion}>Next </button>
        </div>
      )

    default:
      return (
        <div>
          <h1>loading ...</h1>
        </div>
      )
  }

  return <div></div>
}

export default Type
