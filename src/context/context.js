import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import planetData from './data'

const PlanetContext = React.createContext()

const PlanetProvider = ({ children, props }) => {
  const [currentPlanet, setCurrentPlanet] = useState(planetData[0])
  const [currentFact, setCurrentFact] = useState(planetData[0].overview)
  const [currentImage, setCurrentImage] = useState(planetData[0].images.planet)

  const getPlanet = (name) => {
    const planet = planetData.find((planet) => planet.name === name)
    setCurrentPlanet(planet)
  }

  const getFact = (factName) => {
    setCurrentFact(currentPlanet[factName])
    getImageByFact(factName)
  }

  const getImageByFact = (factName) => {
    switch (factName) {
      case 'overview':
        setCurrentImage(currentPlanet.images.planet)
        break
      case 'structure':
        setCurrentImage(currentPlanet.images.internal)
        break
      case 'geology':
        setCurrentImage(currentPlanet.images.geology)
        break
      default:
        setCurrentImage(currentPlanet.images.planet)
    }
  }

  useEffect(() => {
    setCurrentFact(currentPlanet.overview)
    setCurrentImage(currentPlanet.images.planet)
  }, [currentPlanet])

  return (
    <PlanetContext.Provider
      value={{ currentPlanet, getPlanet, currentFact, getFact, currentImage }}
    >
      {children}
    </PlanetContext.Provider>
  )
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
  props: PropTypes.object
}

export { PlanetContext, PlanetProvider }
