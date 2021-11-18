import React from 'react'
import { render, screen } from '@testing-library/react'
import PlanetDescription from '../PlanetDescription'
import { PlanetProvider } from '../../context/context'

describe('Planet Description Component', () => {
  it('should render the planet description', () => {
    render(<PlanetDescription />, { wrapper: PlanetProvider })
    expect(screen.getByRole('heading', { name: /mercury/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /wikipedia/i })).toHaveAttribute(
      'href',
      'https://en.wikipedia.org/wiki/Mercury_(planet)'
    )
  })

  it('should have 3 buttons on the planet description', () => {
    render(<PlanetDescription />, { wrapper: PlanetProvider })
    expect(screen.getAllByRole('button')).toHaveLength(3)
  })

  it('the first button should be active', () => {
    render(<PlanetDescription />, { wrapper: PlanetProvider })
    expect(screen.getByRole('button', { name: /01 overview/i })).toHaveClass('active-color')
    expect(screen.getByRole('button', { name: /02 internal structure/i })).not.toHaveClass(
      'active-color'
    )
    expect(screen.getByRole('button', { name: /03 surface geology/i })).not.toHaveClass(
      'active-color'
    )
  })
})
