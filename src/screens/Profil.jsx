import React from 'react'

const Profil = ({ isLogin }) => {
  return (
    <div>
      {isLogin ? (<h1>Bienvenue dans votre profil</h1>&& console.log('oui')) : (<h1>Veuillez vous authentifier</h1>)}
    </div>
  )
}

export default Profil