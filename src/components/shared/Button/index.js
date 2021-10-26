import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLORS } from '../../../globalStyles'

const Button = ({ text, isActive, color }) => {
  return (
    <ButtonWrapper className={isActive && 'active'} color={color}>
      {text || 'Button'}
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.button`
  background-color: ${(props) => props.color || COLORS.background};

  &:hover {
    background-color: ${COLORS.darkGray};
  }
`

Button.propTypes = {
  text: PropTypes.string,
  isActive: PropTypes.bool,
  color: PropTypes.string
}

export default Button
