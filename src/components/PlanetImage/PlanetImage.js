import React from 'react'
import PlanetImageContainer from './styles'
import { PlanetContext } from '../../context/context'

const PlanetImage = () => {
  const { currentPlanet } = React.useContext(PlanetContext)

  const {
    name,
    images: { planet: source }
  } = currentPlanet

  return (
    <PlanetImageContainer>
      <img src={process.env.PUBLIC_URL + source} alt={name || 'Planet'} />
    </PlanetImageContainer>
  )
}

export default PlanetImage
