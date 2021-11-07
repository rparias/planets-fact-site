import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { _Description as Description } from './_Description'
import { _Buttons as Buttons } from './_Buttons'

const PlanetDescription = ({ planet }) => {
  return (
    <Wrapper>
      <Description {...planet} />
      <Buttons />
    </Wrapper>
  )
}

PlanetDescription.propTypes = {
  planet: PropTypes.object.isRequired
}

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 350px;
`

export default PlanetDescription
