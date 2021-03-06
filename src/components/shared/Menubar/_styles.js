import styled from 'styled-components'
import { COLORS } from '../../../globalStyles'

const Navbar = styled.nav`
  position: sticky;
  top: 0;
  background-color: ${COLORS.background};
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${COLORS.lightGray};
  z-index: 2;

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
    flex-wrap: wrap;

    ul {
      display: none;
      flex-direction: column;
      flex-basis: 100%;
    }

    .active {
      display: block;
      height: 100vh;
      z-index: 1;
    }

    h2 {
      margin: 16px 0;
    }

    svg {
      display: block;
    }

    @media only screen and (max-width: 767px) {
      h2 {
        margin-left: 24px;
      }

      svg {
        margin-right: 24px;
      }
    }
  }
`

export default Navbar
