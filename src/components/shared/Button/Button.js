import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLORS } from '../../../globalStyles'
import { PlanetContext } from '../../../context/context'

const Button = ({ text, number, name }) => {
  const { getFact, setActive, currentPlanet } = React.useContext(PlanetContext)

  const handleOnClick = (e) => {
    e.preventDefault()
    getFact(e.target.name)
    setActive(e.target.name)
  }

  const padNumber = (number = 1) => String(number).padStart(2, '0')

  return (
    <ButtonWrapper
      activeColor={COLORS[currentPlanet.name.toLowerCase()]}
      name={name}
      onClick={handleOnClick}
    >
      <span>{padNumber(number)}</span>
      {text || 'Button'}
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
    width: 280px;
    font-size: 9px;

    span {
      margin: 8px 20px;
    }
  }
`

Button.propTypes = {
  text: PropTypes.string,
  number: PropTypes.number,
  name: PropTypes.string
}

export default Button
