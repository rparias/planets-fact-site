import React from 'react'
import Menubar from './components/shared/Menubar'
import PlanetImage from './components/PlanetImage'
import PlanetDescription from './components/PlanetDescription'
import PlanetFact from './components/PlanetFact'
import GlobalStyle from './globalStyles'
import { MainContainer, FactsContainer, FooterContainer } from './styles'

function App() {
  const planet = {
    name: 'Mercury',
    overview: {
      content:
        "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
      source: 'https://en.wikipedia.org/wiki/Mercury_(planet)'
    },
    images: {
      planet: '/assets/planet-mercury.svg'
    },
    rotation: '0.99 Days',
    revolution: '365.26 Days',
    radius: '6,371 KM',
    temperature: '16°c'
  }

  const {
    name,
    images: { planet: source },
    rotation,
    revolution,
    radius,
    temperature
  } = planet

  const facts = [
    { property: 'Rotation time', value: rotation },
    { property: 'Revolution Time', value: revolution },
    { property: 'Radius', value: radius },
    { property: 'Average temp.', value: temperature }
  ]

  return (
    <>
      <GlobalStyle />
      <Menubar />
      <MainContainer>
        <PlanetImage />
        <PlanetDescription planet={planet} />
        <FactsContainer>
          {facts.map((fact, index) => (
            <PlanetFact key={index} {...fact} />
          ))}
        </FactsContainer>
      </MainContainer>
      <FooterContainer>Made by Ronald Arias</FooterContainer>
    </>
  )
}

export default App
