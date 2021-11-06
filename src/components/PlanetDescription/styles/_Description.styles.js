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
  }
`
export default Wrapper
