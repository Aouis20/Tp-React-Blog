import React, { useState } from 'react'

const Identifiants = ({username, mdp, type}) => {
    const [isLogin, setIsLogin] = useState(false)
    const [comptes, setComptes] = useState([
        {
            username: 'Aouis',
            mdp: 'aze'
        },
    ])

    return (
        <div>
            {
                type ? (
                    setComptes(oldState => {
                        const newState = [...oldState]
                        newState.push({
                            username:{username},
                            mdp:{mdp}
                        })
                        return newState
                    })
                ) : (
                    console.log('oui')
                )z
            }
        </div>
    )
}

export default Identifiants