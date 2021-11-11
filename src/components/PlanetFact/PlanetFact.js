import React from 'react'
import PlanetFactContainer from './styles'
import PropTypes from 'prop-types'

const PlanetFact = ({ property, value }) => {
  return (
    <PlanetFactContainer>
      <h4>{property || 'Property'}</h4>
      <h2>{value || 'Value'}</h2>
    </PlanetFactContainer>
  )
}

PlanetFact.propTypes = {
  property: PropTypes.string,
  value: PropTypes.string
}

export default PlanetFact
