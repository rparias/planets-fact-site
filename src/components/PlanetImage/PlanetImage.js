import React from 'react'
import PropTypes from 'prop-types'
import PlanetImageContainer from './styles'

const PlanetImage = ({ source, altText }) => {
  return (
    <PlanetImageContainer>
      <img src={process.env.PUBLIC_URL + source} alt={altText || 'Planet'} />
    </PlanetImageContainer>
  )
}

PlanetImage.propTypes = {
  source: PropTypes.string.isRequired,
  altText: PropTypes.string
}
export default PlanetImage
