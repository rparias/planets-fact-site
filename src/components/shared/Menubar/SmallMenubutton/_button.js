import React from 'react'
import PropTypes from 'prop-types'
import Button from './_styles'
import { PlanetContext } from '../../../../context/context'

const SmallMenubutton = ({ text, color }) => {
  const { getPlanet } = React.useContext(PlanetContext)

  const handleOnClick = () => {
    getPlanet(text)
    const menu = document.querySelector('.menu')
    menu.classList.remove('active')
  }

  return (
    <Button color={color} onClick={handleOnClick}>
      {text}
    </Button>
  )
}

SmallMenubutton.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string
}

export default SmallMenubutton
