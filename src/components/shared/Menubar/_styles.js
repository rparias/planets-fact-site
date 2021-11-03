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

  svg {
    display: none;
  }

  @media only screen and (max-width: 1023px) {
    flex-direction: column;
    align-items: center;

    h2 {
      margin-bottom: 0;
    }

    ul {
      margin-right: 0;
    }
  }

  @media only screen and (max-width: 767px) {
    flex-direction: row;
    padding: 0 24px;

    ul {
      display: none;
    }

    h2 {
      margin: 16px 0;
    }

    svg {
      display: block;
    }
  }
`

export default Navbar
