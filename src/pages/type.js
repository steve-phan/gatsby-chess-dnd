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
  const [userAnswer, setUserAnswer] = useState('')

  const [mode, setMode] = useState('')
  const [x, setX] = useState('')
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
  const handleSubmit = correctAnswer => {
    console.log(userAnswer)
    console.log(correctAnswer)
    if (correctAnswer === userAnswer) alert('goodjob Amazing...')
  }
  //   console.log(questions)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respond = await fetch(
          'https://quizapi.io/api/v1/questions?apiKey=piO3ChAWONLAwHKusVwbtK1bNMSTnKh1rdKhN7T1'
        )
        const data = await respond.json()
        setX(JSON.stringify(data, null, 2))
        const categories = data.map(item => item.category)
        numRef.current = getRandomNum(questions.length)
        console.log(data)
        setQuestions(data)

        setMode(categories[numRef.current])
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  return (
    <div>
      <pre>{x}</pre>

      {/* {JSON.stringify({ x: 5, y: 6 }, 2, null)} */}
    </div>
  )

  if (!questions.length) return <div>game over ...</div>
  const quiz = questions[numRef.current]
  const answers = Object.entries(quiz.answers).filter(([key, value]) => value)

  console.log(answers)
  return (
    <div>
      <h3>Question : {questions[numRef.current].question} </h3>
      <div className="answer-options">
        <ul>
          {answers.map((answer, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  setUserAnswer(answer[0])
                }}
              >
                <p>{answer[1]}</p>
              </li>
            )
          })}
        </ul>
      </div>
      <button onClick={() => handleSubmit(quiz.correct_answer)}>Submit</button>
      <button onClick={handleNextQuestion}>Next Question</button>
    </div>
  )
  // switch (mode) {
  //   case 'SQL':
  //     return (
  //       <div>
  //         <h1>SQL</h1>
  //         <button onClick={handleNextQuestion}>Next </button>
  //       </div>
  //     )
  //   case 'Docker':
  //     return (
  //       <div>
  //         <h1>Docker</h1>
  //         <button onClick={handleNextQuestion}>Next </button>
  //       </div>
  //     )
  //   case 'Code':
  //     return (
  //       <div>
  //         <h1>Code</h1>
  //         <button onClick={handleNextQuestion}>Next </button>
  //       </div>
  //     )
  //   case 'DevOps':
  //     return (
  //       <div>
  //         <h1>"DevOps"</h1>
  //         <button onClick={handleNextQuestion}>Next </button>
  //       </div>
  //     )
  //   case 'Docker':
  //     return (
  //       <div>
  //         <h1>Docker</h1>
  //         <button onClick={handleNextQuestion}>Next </button>
  //       </div>
  //     )
  //   case 'Linux':
  //     return (
  //       <div>
  //         <h1>Linux</h1>
  //         <button onClick={handleNextQuestion}>Next </button>
  //       </div>
  //     )
  //   case 'CMS':
  //     return (
  //       <div>
  //         <h1>CMS</h1>
  //         <button onClick={handleNextQuestion}>Next </button>
  //       </div>
  //     )
  //   case '':
  //     return (
  //       <div>
  //         <h1>Uncategory</h1>
  //         <button onClick={handleNextQuestion}>Next </button>
  //       </div>
  //     )

  //   default:
  //     return (
  //       <div>
  //         <h1>loading ...</h1>
  //       </div>
  //     )
  // }
}

export default Type
