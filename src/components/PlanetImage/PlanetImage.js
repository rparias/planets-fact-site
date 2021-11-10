import React from 'react'
import PropTypes from 'prop-types'

const PlanetImage = ({ source, altText }) => {
  return <img src={source} alt={altText || 'Planet'} />
}

PlanetImage.propTypes = {
  source: PropTypes.string.isRequired,
  altText: PropTypes.string
}
export default PlanetImage
