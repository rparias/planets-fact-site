import React from 'react'
import PropTypes from 'prop-types'
import SmallButtonContainer from './styles'
import { PlanetContext } from '../../../context/context'

const SmallButton = ({ text, activeColor, name }) => {
  const { getFact } = React.useContext(PlanetContext)

  const handleOnClick = (e) => {
    e.preventDefault()
    getFact(e.target.name)
  }

  return (
    <SmallButtonContainer
      className={activeColor && 'active-color'}
      activeColor={activeColor}
      name={name}
      onClick={handleOnClick}
    >
      {text || 'Button'}
    </SmallButtonContainer>
  )
}

SmallButton.propTypes = {
  text: PropTypes.string,
  activeColor: PropTypes.string,
  name: PropTypes.string
}

export default SmallButton
