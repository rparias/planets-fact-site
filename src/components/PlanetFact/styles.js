import styled from 'styled-components'
import { COLORS } from '../../globalStyles'

const PlanetFactContainer = styled.article`
  border: 1px solid ${COLORS.darkGray};
  padding: 20px;
  margin-top: 80px;
  width: 255px;

  h4 {
    color: ${COLORS.lightGray};
  }

  @media only screen and (max-width: 1440px) {
    width: 100%;
  }
`

export default PlanetFactContainer
