import styled from 'styled-components'
import { COLORS } from '../../../globalStyles'

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${COLORS.lightGray};

  h2 {
    font-size: 28px;
    margin: 22px 32px;
  }

  ul {
    display: flex;
    list-style: none;
    margin-right: 24px;
  }
`

export default Navbar
