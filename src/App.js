import React from 'react'
import Menubar from './components/shared/Menubar'
import PlanetImage from './components/PlanetImage'
import PlanetDescription from './components/PlanetDescription'
import PlanetFacts from './components/PlanetFacts/PlanetFacts'
import GlobalStyle from './globalStyles'
import { MainContainer, FooterContainer } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Menubar />
      <MainContainer>
        <PlanetImage />
        <PlanetDescription />
        <PlanetFacts />
      </MainContainer>
      <FooterContainer>Made by Ronald Arias</FooterContainer>
    </>
  )
}

export default App
