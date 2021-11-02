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

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    padding: 0 52px;

    h2 {
      margin-bottom: 0;
    }

    ul {
      margin-right: 0;
    }
  }
`

export default Navbar
