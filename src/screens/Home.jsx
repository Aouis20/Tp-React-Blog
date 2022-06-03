import React from 'react'
import { Link } from 'react-router-dom'
import CarouselContainer from '../components/Carousel'

const Home = () => {
  return (
    <div>
      <h1>Bienvenue sur la page d'accueil</h1>
      <CarouselContainer />
    </div>
  )
}

export default Home