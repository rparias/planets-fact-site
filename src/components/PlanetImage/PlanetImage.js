import React from 'react'
import PropTypes from 'prop-types'

const PlanetImage = ({ source, altText }) => {
  return (
    <picture>
      <img src={process.env.PUBLIC_URL + source} alt={altText || 'Planet'} />
    </picture>
  )
}

PlanetImage.propTypes = {
  source: PropTypes.string.isRequired,
  altText: PropTypes.string
}
export default PlanetImage
