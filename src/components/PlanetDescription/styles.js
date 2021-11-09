import styled from 'styled-components'

const PlanetDescriptionContent = styled.article`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-width: 350px;

  @media only screen and (max-width: 1023px) {
    flex-direction: row;
    max-width: 100%;
    gap: 60px;
  }
`

export default PlanetDescriptionContent
