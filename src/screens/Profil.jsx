import React from 'react'

const Profil = ({ isLogin }) => {
  return (
    <div>
      {isLogin ? (<h1>Bienvenue dans ton profil {localStorage.getItem('username')}</h1>) : (<h1>Veuillez vous authentifier</h1>)}
    </div>
  )
}

export default Profil