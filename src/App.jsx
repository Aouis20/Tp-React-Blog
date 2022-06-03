import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './style.css'
import Home from './screens/Home'
import Pages from './screens/Pages'
import Profil from './screens/Profil'
import Chroniques from './screens/Chroniques'
import Inscription from './screens/Inscription'
import Connexion from './screens/Connexion'

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [comptes, setComptes] = useState([
    {
      username: 'Aouis',
      mdp: 'aze'
    },
  ])

  return (
    <div className="App">
      <BrowserRouter>
        <div className='topnav'>
          <Link className='active' to="/">Accueil</Link>
          <Link to="/pages">Pages</Link>
          <Link to="/chroniques">Chroniques</Link>
          <Link to="/profil">Profil</Link>
          <div className='login'>
            <Link to="/inscription">S'inscire</Link>
            <Link to="/connexion">Se connecter</Link>
          </div>
        </div>

        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/pages" element={<Pages />}></Route>
            <Route path="/profil" element={<Profil isLogin={isLogin}/>}></Route>
            <Route path="/chroniques" element={<Chroniques isLogin={isLogin} />}></Route>
            <Route path="/inscription" element={<Inscription setComptes={setComptes} />}></Route>
            <Route path="/connexion" element={<Connexion setIsLogin={setIsLogin} comptes={comptes} />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
