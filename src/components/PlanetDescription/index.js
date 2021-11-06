import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { _Description as Description } from './_Description'

const PlanetDescription = ({ planet }) => {
  return (
    <Wrapper>
      <Description {...planet} />
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
