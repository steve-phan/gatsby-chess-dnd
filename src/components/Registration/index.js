import React, { useState } from 'react'
import firebase from '../../../firebase/utils.firebase'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = e => {
    e.preventDefault()

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => console.log(user))
      .catch(err => console.log(err))
  }
  return (
    <div>
      <input
        type="email"
        placeholder="email"
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Signup</button>
    </div>
  )
}

export default SignUp
