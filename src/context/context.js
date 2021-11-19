import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import planetData from './data'

const PlanetContext = React.createContext()

const PlanetProvider = ({ children, props }) => {
  const [currentPlanet, setCurrentPlanet] = useState(planetData[0])
  const [currentFact, setCurrentFact] = useState(planetData[0].overview)
  const [activeButton, setActiveButton] = useState('overview')

  const getPlanet = (name) => {
    const planet = planetData.find((planet) => planet.name === name)
    setCurrentPlanet(planet)
  }

  const getFact = (factName) => {
    setCurrentFact(currentPlanet[factName])
  }

  const setActive = (buttonName) => {
    const previousActiveButtons = document.getElementsByName(activeButton)
    previousActiveButtons.forEach((button) => {
      button.classList.remove('active-color')
    })
    const newActiveButtons = document.getElementsByName(buttonName)
    newActiveButtons.forEach((button) => {
      button.classList.add('active-color')
    })
    setActiveButton(buttonName)
  }

  useEffect(() => {
    setActive('overview')
    setCurrentFact(currentPlanet.overview)
  }, [currentPlanet])

  return (
    <PlanetContext.Provider value={{ currentPlanet, getPlanet, currentFact, getFact, setActive }}>
      {children}
    </PlanetContext.Provider>
  )
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
  props: PropTypes.object
}

export { PlanetContext, PlanetProvider }
