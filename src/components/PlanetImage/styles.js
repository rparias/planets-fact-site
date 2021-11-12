import styled from 'styled-components'

const PlanetImageContainer = styled.picture`
  display: flex;
  justify-content: center;

  @media only screen and (min-width: 1024px) {
    width: 50%;
  }
`

export default PlanetImageContainer
