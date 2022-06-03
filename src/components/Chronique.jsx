import React, { useState } from 'react'
import '../style.css'

const Chronique = ({ chronique, index, setChroniqueArray, setChroniqueModify, setChroniqueToModify, isLogin }) => {

  const date = new Date()
  const today = date.getDate() + "/" + (date.getMonth()+1)  + "/" + date.getFullYear() + " à "  + date.getHours() + ":"  + date.getMinutes()


  const handleDelete = () => {
    setChroniqueArray(oldState => {
      const newState = [...oldState]
      newState.splice(index, 1)
      return newState
    })
  }

  const handleModify = () => {
    setChroniqueModify(true)
    setChroniqueToModify(chronique)
  }

  return (
    <div className='chroniqueStyle'>
      <img src="https://media.istockphoto.com/photos/white-chat-bubble-on-blue-background-picture-id939841246?k=20&m=939841246&s=612x612&w=0&h=xNjCGHW3AmxcKT-dwqBsPs_ODykT-SerIUcry6vnrtQ=" alt="imgplaceholder" />
      <div>
        <h3>{chronique[0]}</h3>
        <u>{chronique[2]}</u>
        <p>{chronique[3]}</p>
        <p><i>Publié par {chronique[1]} le {today} </i></p>
        {isLogin && <button onClick={handleDelete}>Supprimer</button>}
        {isLogin && <button onClick={handleModify}>Modifier</button>}
      </div>
    </div>
  )
}

export default Chronique