import styled from 'styled-components'
import { COLORS } from '../../../globalStyles'

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 28px;
    margin: 22px 32px;
  }

  ul {
    display: flex;
    list-style: none;
    margin-right: 24px;

    li {
      button {
        background: none;
        border: none;
        font-size: 11px;
        color: ${COLORS.lightGray};
        padding: 33px 16px;

        &:hover {
          color: ${COLORS.text};
          cursor: pointer;
        }
      }
    }
  }
`

export default Navbar
