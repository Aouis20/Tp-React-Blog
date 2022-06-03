import React, { useState, useEffect } from 'react'
import ChroniquesForm from '../components/ChroniquesForm'
import Chronique from '../components/Chronique'
import '../style.css'

const Chroniques = ({isLogin}) => {

  const [chroniqueArray, setChroniqueArray] = useState([['Un titre', 'Aouis', 'Action', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'], ['Un autre titre', 'Tom', 'Horreur', 'Ceci est un contenu de test...']])
  const [chroniqueModify, setChroniqueModify] = useState(false)
  const [chroniqueToModify, setChroniqueToModify] = useState([])

  return (
    <div>
      <h1>Chroniques</h1>
      <div className='chronique'>
        <div>
          {chroniqueArray.length === 0 && (<h2>Aucune chronique disponible</h2>)}
          <div className='chroniqueList'>
            {
              chroniqueArray.map((chronique, index) => (
                <Chronique 
                  key={index}
                  chronique={chronique}
                  setChroniqueArray={setChroniqueArray}
                  setChroniqueModify={setChroniqueModify}
                  setChroniqueToModify={setChroniqueToModify}
                  index={index}
                  isLogin={isLogin}
                />
              ))
            }
          </div>
        </div>
          {
            <ChroniquesForm
              chroniqueArray={chroniqueArray}
              setChroniqueArray={setChroniqueArray}
              chroniqueModify={chroniqueModify}
              setChroniqueModify={setChroniqueModify}
              chroniqueToModify={chroniqueToModify}
              isLogin={isLogin}
            />
          }
      </div>
    </div>
  )
}

export default Chroniques