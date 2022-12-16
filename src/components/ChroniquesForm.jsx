import React, { useState, useEffect } from 'react'
import '../style.css'

const ChroniquesForm = ({ chroniqueArray, setChroniqueArray, setChroniqueModify, chroniqueModify, chroniqueToModify, isLogin }) => {

  const [titre, setTitre] = useState('')
  const [auteur, setAuteur] = useState('')
  const [genre, setGenre] = useState('')
  const [contenu, setContenu] = useState('')


  const handleSubmit = e => {
    e.preventDefault()
    setChroniqueArray(oldState => {
      const newState = [...oldState]
      newState.push([titre, auteur, genre , contenu])
      return newState
    })
    setTitre('')
    setAuteur('')
    setGenre('')
    setContenu('')
  }

  const handleModify = e => {
    e.preventDefault()
    setChroniqueArray(oldState => {
      console.log(titre)
      const newState = [...oldState]
      newState[chroniqueArray.indexOf(chroniqueToModify)] = [titre, auteur, genre, contenu]
      return newState
    })
    setTitre('')
    setAuteur('')
    setGenre('')
    setContenu('')
    setChroniqueModify(false)
  }

  return (
    <div>
      {
        !chroniqueModify ? (
          <>
            <h2>Ajouter une chronique :</h2>
            <form onSubmit={handleSubmit} className="divform">

              <label>Titre</label>
              <input type="text" value ={titre}  onChange={e => setTitre(e.target.value)} required />

              <label>Auteur</label>
              <input type="text" value ={auteur} onChange={e => setAuteur(e.target.value)} required />
              
              <label>Genre</label>
              <select type="text" value ={genre} onChange={e => setGenre(e.target.value)} required>
                <option value="Autres">Séléctionner un genre</option>
                <option value="Action">Action</option>
                <option value="Horreur">Horreur</option>
                <option value="Policier">Policier</option>
                <option value="Science-Fiction">Science-Fiction</option>
                <option value="Autres">Autres</option>
              </select>

              <label>Contenu</label>
              <textarea type="text" value ={contenu} onChange={e => setContenu(e.target.value)} required />

              {isLogin && <button type="submit">Ajouter</button>}
            </form>
          </>
        ) : (
          <>
            <h2>Modifer la chronique :</h2>
            <form onSubmit={handleModify} className="divform">
              <label>Titre</label>
              <input type="text" value ={titre} onChange={e => setTitre(e.target.value)} placeholder={chroniqueToModify[0]} />

              <label>Auteur</label>
              <input type="text" value ={auteur} onChange={e => setAuteur(e.target.value)} placeholder={chroniqueToModify[1]} />
              
              <label>Genre</label>
              <select type="text" value ={genre} onChange={e => setGenre(e.target.value)} >
                <option value={chroniqueToModify[2]}>{chroniqueToModify[2]}</option>
                <option value="Action">Action</option>
                <option value="Horreur">Horreur</option>
                <option value="Policier">Policier</option>
                <option value="Science-Fiction">Science-Fiction</option>
                <option value="Autre">Autre</option>
              </select>

              <label>Contenu</label>
              <textarea type="text" value={contenu} onChange={e => setContenu(e.target.value)} placeholder={chroniqueToModify[3]} />

              {isLogin && <button type="submit">Modifier</button>}
            </form>
          </>
        )
      }
    </div>
  )
}

export default ChroniquesForm
