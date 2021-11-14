import styled from 'styled-components'
import { COLORS } from '../../../globalStyles'

const Wrapper = styled.article`
  p {
    margin: 24px 0;
  }

  span {
    color: ${COLORS.lightGray};
  }

  a {
    font-weight: bold;
    color: ${COLORS.lightGray};
    margin-right: 8px;
  }

  @media only screen and (max-width: 1023px) {
    span,
    a {
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 767px) {
    text-align: center;

    p {
      margin-top: 0;
    }
  }
`
export default Wrapper
