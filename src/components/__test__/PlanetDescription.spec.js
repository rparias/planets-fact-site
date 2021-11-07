import React from 'react'
import { render, screen } from '@testing-library/react'
import PlanetDescription from '../PlanetDescription'

describe('Planet Description Component', () => {
  beforeEach(() => {
    const planet = {
      name: 'Mercury',
      overview: {
        content:
          "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
        source: 'https://en.wikipedia.org/wiki/Mercury_(planet)'
      }
    }
    render(<PlanetDescription planet={planet} />)
  })
  it('should render the planet description', () => {
    expect(screen.getByRole('heading', { name: /mercury/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /wikipedia/i })).toHaveAttribute(
      'href',
      'https://en.wikipedia.org/wiki/Mercury_(planet)'
    )
  })

  it('should have 3 buttons on the planet description', () => {
    expect(screen.getAllByRole('button')).toHaveLength(3)
  })

  it('the first button should be active', () => {
    expect(screen.getByRole('button', { name: /01 overview/i })).toHaveClass('active-color')
    expect(screen.getByRole('button', { name: /02 internal structure/i })).not.toHaveClass(
      'active-color'
    )
    expect(screen.getByRole('button', { name: /03 surface geology/i })).not.toHaveClass(
      'active-color'
    )
  })
})
