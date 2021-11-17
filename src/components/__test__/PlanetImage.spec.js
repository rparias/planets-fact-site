import React from 'react'
import { render, screen } from '@testing-library/react'
import { PlanetContext, PlanetProvider } from '../../context/context'
import PlanetImage from '../PlanetImage'

describe('PlanetImage component', () => {
  it('should display an image with the proper alternative text if is passed as prop', () => {
    render(<PlanetImage />, { wrapper: PlanetProvider })
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('alt', 'Mercury')
  })

  it('should display an image with an alternative text if is not passed as prop', () => {
    const currentPlanet = {
      name: undefined,
      images: {
        planet: '/assets/planet-mercury.svg'
      }
    }
    render(
      <PlanetContext.Provider value={{ currentPlanet }}>
        <PlanetImage />
      </PlanetContext.Provider>
    )
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('alt', 'Planet')
  })

  it('should display an image with the proper source', () => {
    render(<PlanetImage />, { wrapper: PlanetProvider })
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('src', '/assets/planet-mercury.svg')
  })
})
