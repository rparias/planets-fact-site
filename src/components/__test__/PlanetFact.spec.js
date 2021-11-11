import React from 'react'
import { render, screen } from '@testing-library/react'
import PlanetFact from '../PlanetFact'

describe('PlanetFact component', () => {
  it('should have two headings', () => {
    render(<PlanetFact />)
    expect(screen.getAllByRole('heading')).toHaveLength(2)
  })

  it('should have a heading with the correct text', () => {
    render(<PlanetFact property="Planet Fact" value="123.4 Days" />)
    expect(screen.getByRole('heading', { name: 'Planet Fact', level: 4 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '123.4 Days', level: 2 })).toBeInTheDocument()
  })
})
