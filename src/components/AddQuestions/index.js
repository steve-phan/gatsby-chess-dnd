import React, { useState } from 'react'
import styled from 'styled-components'
import firebase from '../../../firebase/utils.firebase'

const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  background-color: #f7f7f9;
  font-size: 18px;
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`
const Form = styled.form`
  padding: 1rem;
`

const Label = styled.label`
  padding-left: 4px;
`
const Input = styled.input.attrs(props => ({
  type: 'text',
}))`
  display: block;
  width: 100%;
  box-sizing: border-box;
  max-width: 100%;
  padding: 0.4rem;
  margin: 0.6rem 0;
  border: 1px solid #cecece;
  outline: none;
  border-radius: 4px;
  position: relative;
  &:focus {
    box-shadow: 0 0 5px #fd00ad;
    /* padding: 3px 0px 3px 3px;
  margin: 5px 1px 3px 0px; */
    border: 1px solid #f7d346;
  }
`
const Select = styled.select`
  width: 115px;
  padding: 2px 4px;

  font-size: 16px;
`
const Option = styled.option``

const Button = styled.button`
  padding: 6px;
`
const initalValues = {
  // id: '',
  question: '',
  answer1: '',
  answer2: '',
  answer3: '',
  answer4: '',
  correct_answer: '',
  klasse: '',
  category: '',
}

const AddQuestions = () => {
  const [values, setValues] = useState(initalValues)

  const addData = data => {
    console.log(data)
  }

  const handleInputChange = async e => {
    console.log(e.target.value)
    console.log(e.target.id)
    setValues({
      ...values,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmitQuestion = async e => {
    e.preventDefault()
    const {
      question,
      answer1,
      answer2,
      answer3,
      answer4,
      correct_answer,
      klasse,
      category,
    } = values

    const docRef = firebase.firestore().doc(`quiz/${klasse}`)
    const newQuestion = {
      id: klasse + Date.now(),
      question,
      answers: [answer1, answer2, answer3, answer4],
      correct_answer,
      klasse,
      category,
    }
    try {
      await docRef.update({
        [category]: firebase.firestore.FieldValue.arrayUnion(newQuestion),
      })
    } catch (error) {
      console.log(error)
    }

    console.log('hegheh')
  }
  // console.log(values)
  return (
    <Container>
      <Form>
        <Label htmlFor="question">Question</Label>
        <Input
          id="question"
          type="text"
          // placeholder="Question.."
          required
          onChange={handleInputChange}
        />
        <Label htmlFor="answer1">Answer 1</Label>
        <Input
          id="answer1"
          type="text"
          // placeholder="Answer  1..."
          required
          onChange={handleInputChange}
        />
        <Label htmlFor="answer2">Answer 2</Label>
        <Input
          id="answer2"
          type="text"
          // placeholder="Answer 2 ..."
          required
          onChange={handleInputChange}
        />
        <Label htmlFor="answer3">Answer 3</Label>
        <Input
          id="answer3"
          type="text"
          // placeholder="Answer  3..."
          required
          onChange={handleInputChange}
        />
        <Label htmlFor="answer4">Answer 4</Label>
        <Input
          id="answer4"
          type="text"
          // placeholder="Answer  4..."
          required
          onChange={handleInputChange}
        />
        <Row>
          <Label htmlFor="correct_answer">Correct answer?</Label>
          <Select id="correct_answer" onChange={handleInputChange} required>
            <Option value="">Select</Option>
            <Option value="answer1">Anwser 1</Option>
            <Option value="answer2">Anwser 2</Option>
            <Option value="answer3">Anwser 3</Option>
            <Option value="answer4">Anwser 4</Option>
          </Select>
        </Row>
        <Row>
          <Label htmlFor="klasse">Klasse</Label>
          <Select id="klasse" onChange={handleInputChange} required>
            <Option value="">Select</Option>
            <Option value="klasse1">Klasse 1</Option>
            <Option value="klasse2">Klasse 2</Option>
            {/* <Option value="klasse3">Klasse 3</Option>
          <Option value="klasse4">Klasse 4</Option> */}
          </Select>
        </Row>
        <Row>
          <Label htmlFor="category">Category</Label>
          <Select id="category" onChange={handleInputChange} required>
            <Option value="">Select</Option>
            <Option value="math">Math</Option>
            <Option value="english">English</Option>
            <Option value="deutsch">Deutsch</Option>
            <Option value="sachunterricht">Sunterricht</Option>
          </Select>
        </Row>
        <Button onClick={handleSubmitQuestion}>Submit</Button>
      </Form>
    </Container>
  )
}

export default AddQuestions
