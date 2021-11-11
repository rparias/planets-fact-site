import styled from 'styled-components'
import { COLORS } from '../../../globalStyles'

const Wrapper = styled.article`
  p {
    margin: 24px 0;
  }

  span {
    color: ${COLORS.darkGray};
  }

  a {
    font-weight: bold;
    color: ${COLORS.lightGray};
    margin-right: 8px;
  }

  @media only screen and (max-width: 767px) {
    text-align: center;
  }
`
export default Wrapper
