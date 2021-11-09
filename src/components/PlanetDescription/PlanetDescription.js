import React from 'react'
import PropTypes from 'prop-types'
import { _Description as Description } from './_Description'
import { _Buttons as Buttons } from './_Buttons'
import PlanetDescriptionContent from './styles'

const PlanetDescription = ({ planet }) => {
  return (
    <PlanetDescriptionContent>
      <Description {...planet} />
      <Buttons />
    </PlanetDescriptionContent>
  )
}

PlanetDescription.propTypes = {
  planet: PropTypes.object.isRequired
}

export default PlanetDescription
