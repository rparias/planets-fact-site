import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Antonio:wght@500&family=Spartan:wght@400;700&display=swap');
  body {
    margin: 0;
    padding: 0;
    background: #070724;
    font-family: 'Spartan', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 25px;
  }

  h1, h2, h3, h4 {
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

  h3 {
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
