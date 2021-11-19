import React from 'react'
import PlanetImageContainer from './styles'
import { PlanetContext } from '../../context/context'

const PlanetImage = () => {
  const { currentPlanet, currentImage } = React.useContext(PlanetContext)

  const { name } = currentPlanet

  return (
    <PlanetImageContainer>
      <img src={process.env.PUBLIC_URL + currentImage} alt={name || 'Planet'} />
    </PlanetImageContainer>
  )
}

export default PlanetImage
