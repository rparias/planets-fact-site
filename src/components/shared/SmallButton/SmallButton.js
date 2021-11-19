import React from 'react'
import PropTypes from 'prop-types'
import SmallButtonContainer from './styles'
import { COLORS } from '../../../globalStyles'
import { PlanetContext } from '../../../context/context'

const SmallButton = ({ text, name, active, setActiveButton }) => {
  const { getFact, currentPlanet } = React.useContext(PlanetContext)

  const handleOnClick = (e) => {
    e.preventDefault()
    getFact(e.target.name)
    setActiveButton(e.target.name)
  }

  return (
    <SmallButtonContainer
      className={active ? 'active-color' : ''}
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
  name: PropTypes.string,
  active: PropTypes.bool,
  setActiveButton: PropTypes.func
}

export default SmallButton
