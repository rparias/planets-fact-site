import React from 'react'
import { FactsContainer } from './style'
import { PlanetContext } from '../../context/context'
import PlanetFact from '../PlanetFact'

const PlanetFacts = () => {
  const { currentPlanet } = React.useContext(PlanetContext)

  const { rotation, revolution, radius, temperature } = currentPlanet

  const facts = [
    { property: 'Rotation time', value: rotation },
    { property: 'Revolution Time', value: revolution },
    { property: 'Radius', value: radius },
    { property: 'Average temp.', value: temperature }
  ]

  return (
    <FactsContainer>
      {facts.map((fact, index) => (
        <PlanetFact key={index} {...fact} />
      ))}
    </FactsContainer>
  )
}

export default PlanetFacts
