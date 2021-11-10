import React from 'react'
import Menubar from './components/shared/Menubar'
import PlanetImage from './components/PlanetImage'
import PlanetDescription from './components/PlanetDescription'
import GlobalStyle from './globalStyles'

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
    }
  }

  const {
    name,
    images: { planet: source }
  } = planet

  return (
    <>
      <GlobalStyle />
      <Menubar />
      <main>
        <PlanetImage altText={name} source={source} />
        <PlanetDescription planet={planet} />
      </main>
    </>
  )
}

export default App
