import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLORS } from '../../../globalStyles'

const Button = ({ text, activeColor, number }) => {
  const padNumber = (number = 1) => String(number).padStart(2, '0')

  return (
    <ButtonWrapper className={activeColor && 'active-color'} activeColor={activeColor}>
      <span>{padNumber(number)}</span> {text || 'Button'}
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.button`
  background-color: ${COLORS.background};
  width: 350px;
  height: 48px;
  border: 0.5px solid ${COLORS.darkGray};
  text-align: start;
  margin: 8px 0;

  &.active-color {
    background-color: ${(props) => props.activeColor || COLORS.mercury};
    border: none;
  }

  &:hover {
    background-color: ${COLORS.darkGray};
    cursor: pointer;
    border: none;
  }

  span {
    color: ${COLORS.lightGray};
    margin: 12px 28px;
  }

  @media only screen and (max-width: 1023px) {
    max-width: 281px;

    span {
      margin: 8px 20px;
    }
  }

  @media only screen and (max-width: 767px) {
    width: 100%;
    margin: 0;

    span {
      display: none;
    }
  }
`

Button.propTypes = {
  text: PropTypes.string,
  activeColor: PropTypes.string,
  number: PropTypes.number
}

export default Button
