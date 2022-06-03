import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Connexion = ({ setIsLogin, comptes }) => {
  
  const [username, setUsername] = useState('')
  const [mdp, setMdp] = useState('')

  const handleConnect = (e) => {
    e.preventDefault()
    localStorage.setItem('username', username)
    comptes.forEach(compte => {
      compte.username == username && compte.mdp == mdp &&
      alert('Connexion réussie')
      return setIsLogin(true)
    });
  }

  return (
    <div className='divform'>
      <div className='signup'>
        <h2>Connexion</h2>
        <form onSubmit={handleConnect}>
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder='Username'/>
          <input type="text" value={mdp} onChange={e => setMdp(e.target.value)} placeholder='Mot de passe'/>
          <button type='submit'>Se connecter</button>
        </form>
        <p>Pas de compte ? <span><Link to="/inscription">S'inscire</Link></span></p>
      </div>
    </div>
  )
}

export default Connexion
