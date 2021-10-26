import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLORS } from '../../../globalStyles'

const Button = ({ text, isActive }) => {
  return <ButtonWrapper className={isActive && 'active'}>{text || 'Button'}</ButtonWrapper>
}

const ButtonWrapper = styled.button`
  background-color: ${COLORS.background};

  &:hover {
    background-color: ${COLORS.darkGray};
  }
`

Button.propTypes = {
  text: PropTypes.string,
  isActive: PropTypes.bool
}

export default Button
