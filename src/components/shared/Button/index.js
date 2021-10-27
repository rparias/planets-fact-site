import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLORS } from '../../../globalStyles'

const Button = ({ text, isActive, color, number }) => {
  const padNumber = (number = 1) => String(number).padStart(2, '0')

  return (
    <ButtonWrapper className={isActive && 'active'} color={color}>
      {padNumber(number)} {text || 'Button'}
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
  color: PropTypes.string,
  number: PropTypes.number
}

export default Button
