import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import planetData from './data'

const PlanetContext = React.createContext()

const PlanetProvider = ({ children, props }) => {
  const [currentPlanet, setCurrentPlanet] = useState(planetData[0])

  const getPlanet = (name) => {
    const planet = planetData.find((planet) => planet.name === name)
    setCurrentPlanet(planet)
  }

  return (
    <PlanetContext.Provider value={{ currentPlanet, getPlanet }}>{children}</PlanetContext.Provider>
  )
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
  props: PropTypes.object
}

export { PlanetContext, PlanetProvider }
