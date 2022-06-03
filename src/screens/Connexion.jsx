import React from 'react'
import { Link } from 'react-router-dom'

const Connexion = () => {

    const handleConnect = () => {

    }

  return (
    <div className='divform'>
      <div className='signup'>
        <h2>Connexion</h2>
        <form onSubmit={handleConnect}>
          <input type="text" placeholder='Username'/>
          <input type="text" placeholder='Mot de passe'/>
          <button type='submit'>Se connecter</button>
        </form>
        <p>Pas de compte ? <span><Link to="/inscription">S'inscire</Link></span></p>
        
      </div>
    </div>
  )
}

export default Connexion