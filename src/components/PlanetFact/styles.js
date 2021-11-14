import styled from 'styled-components'
import { COLORS } from '../../globalStyles'

const PlanetFactContainer = styled.article`
  border: 1px solid ${COLORS.darkGray};
  padding: 20px;
  width: 23%;

  h4 {
    color: ${COLORS.lightGray};
  }

  @media only screen and (max-width: 1023px) {
    padding: 8px 16px;

    h2 {
      font-size: 24px;
    }

    h4 {
      font-size: 8px;
    }
  }

  @media only screen and (max-width: 767px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 24px;
    margin-bottom: 8px;

    h2 {
      font-size: 20px;
    }
  }
`

export default PlanetFactContainer
