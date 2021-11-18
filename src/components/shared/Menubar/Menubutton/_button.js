import React from 'react'
import PropTypes from 'prop-types'
import Button from './_styles'
import { PlanetContext } from '../../../../context/context'

const Menubutton = ({ text, activeColor }) => {
  const { getPlanet } = React.useContext(PlanetContext)

  const handleOnClick = () => {
    getPlanet(text)
  }

  return (
    <Button activeColor={activeColor} onClick={handleOnClick}>
      {text}
    </Button>
  )
}

Menubutton.propTypes = {
  text: PropTypes.string,
  activeColor: PropTypes.string
}

export default Menubutton
