import React from 'react'
import PropTypes from 'prop-types'
import SmallButtonContainer from './styles'
import { COLORS } from '../../../globalStyles'
import { PlanetContext } from '../../../context/context'

const SmallButton = ({ text, name }) => {
  const { getFact, setActive, currentPlanet } = React.useContext(PlanetContext)

  const handleOnClick = (e) => {
    e.preventDefault()
    getFact(e.target.name)
    setActive(e.target.name)
  }

  return (
    <SmallButtonContainer
      activeColor={COLORS[currentPlanet.name.toLowerCase()]}
      name={name}
      onClick={handleOnClick}
    >
      {text || 'Button'}
    </SmallButtonContainer>
  )
}

SmallButton.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string
}

export default SmallButton
