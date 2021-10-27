import { createGlobalStyle } from 'styled-components'

export const COLORS = {
  text: '#FFFFFF',
  background: '#070724',
  mercury: '#419EBB',
  venus: '#EDA249',
  earth: '#6F2ED6',
  mars: '#D14C32',
  jupiter: '#D83A34',
  saturn: '#CD5120',
  uranus: '#1EC2A4',
  neptune: '#2D68F0',
  darkGray: '#38384F',
  lightGray: '#838391'
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    color: ${COLORS.text};
  }
  
  body {
    background: ${COLORS.background};
    font-family: 'Spartan', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 25px;
  }

  h1, h2, h3, h4, button {
    text-transform: uppercase;
  }

  h1 {
    font-family: 'Antonio', sans-serif;
    font-size: 80px;
    line-height: 103px;
  }

  h2 {
    font-family: 'Antonio', sans-serif;
    font-size: 40px;
    line-height: 52px;
    letter-spacing: -1.5px;
  }

  h3, button {
    font-family: 'Spartan', sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 2.6px;
  }

  h4 {
    font-family: 'Spartan', sans-serif;
    font-size: 11px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 1px;
  }
`

export default GlobalStyle
