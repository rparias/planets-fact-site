import React from 'react'
import { render, screen } from '@testing-library/react'
import { PlanetContext, PlanetProvider } from '../../context/context'
import PlanetImage from '../PlanetImage'

describe('PlanetImage component', () => {
  it('should display an image with the proper alternative text if is passed as prop', () => {
    const planet = {
      name: 'Mercury',
      images: {
        planet: '/assets/planet-mercury.svg'
      }
    }
    const {
      name,
      images: { planet: source }
    } = planet
    render(<PlanetImage />, { wrapper: PlanetProvider })
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('alt', 'Mercury')
  })

  it.skip('should display an image with an alternative text if is not passed as prop', () => {
    const planetProps = {
      name: undefined,
      images: {
        planet: '/assets/planet-mercury.svg'
      }
    }
    // render(<PlanetImage />, { wrapper: PlanetProvider })
    render(
      <PlanetContext.Provider {...planetProps}>
        <PlanetImage />
      </PlanetContext.Provider>
    )
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('alt', 'Planet')
  })

  it('should display an image with the proper source', () => {
    const planet = {
      images: {
        planet: '/assets/planet-mercury.svg'
      }
    }
    const {
      images: { planet: source }
    } = planet
    render(<PlanetImage />, { wrapper: PlanetProvider })
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('src', '/assets/planet-mercury.svg')
  })
})
