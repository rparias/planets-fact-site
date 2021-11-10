import React from 'react'
import PropTypes from 'prop-types'
import SmallButtonContainer from './styles'

const SmallButton = ({ text, activeColor }) => {
  return (
    <SmallButtonContainer className={activeColor && 'active-color'} activeColor={activeColor}>
      {text || 'Button'}
    </SmallButtonContainer>
  )
}

SmallButton.propTypes = {
  text: PropTypes.string,
  activeColor: PropTypes.string
}

export default SmallButton
