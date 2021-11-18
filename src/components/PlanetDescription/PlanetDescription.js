import React from 'react'
import { _Description as Description } from './_Description'
import { _Buttons as Buttons } from './_Buttons'
import PlanetDescriptionContent from './styles'

const PlanetDescription = () => {
  return (
    <PlanetDescriptionContent>
      <Description />
      <Buttons />
    </PlanetDescriptionContent>
  )
}

export default PlanetDescription
