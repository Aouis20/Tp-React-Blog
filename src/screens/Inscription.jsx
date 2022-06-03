import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Inscription = ({ setComptes }) => {

  const [username, setUsername] = useState('')
  const [mdp, setMdp] = useState('')
  const [mdp2, setMdp2] = useState('')

  const handleSignUp = e => {
    e.preventDefault()
    if (mdp === mdp2) {
      setComptes(oldState => {
        const newState = [...oldState]
        newState.push({username, mdp})
        return newState
      })
      alert('Inscription effectué')
    }
    else {
      alert('Les mots de passes de sont pas identiques')
      setMdp('')
      setMdp2('')
    }
  }

  return (
    <div className='divform'>
      <div className='signup'>
        <h2>Inscription</h2>
        <form onSubmit={handleSignUp} >
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder='Username'/>
          <input type="text" value={mdp} onChange={e => setMdp(e.target.value)} placeholder='Mot de passe'/>
          <input type="text" value={mdp2} onChange={e => setMdp2(e.target.value)} placeholder='Vérifier votre mot de passe'/>
          <button type='submit' >S'inscire</button>
        </form>
        <p>Déjà un compte ? <span><Link to="/connexion">Se connecter</Link></span></p>
      </div>
    </div>
  )
}

export default Inscription