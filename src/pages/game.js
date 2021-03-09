import React, { useEffect, useState } from 'react'

import firebase from '../../firebase/utils.firebase'
const Game = () => {
  useState(() => {
    firebase
      .firestore()
      .collection('quiz')
      .get()
      .then(querySnapshot => {
        let data = []
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          //   console.log(doc.id, ' => ', doc.data())
          data = [...data, doc.data()]
        })
        return data
      })
      .then(result => console.log(result))
      .catch(error => {
        console.log('Error getting documents: ', error)
      })
  }, [])

  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default Game
