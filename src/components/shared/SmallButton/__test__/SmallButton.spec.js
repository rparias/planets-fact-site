import React from 'react'
import { render, screen } from '@testing-library/react'
import SmallButton from '../SmallButton'
import { PlanetProvider } from '../../../../context/context'

describe('Button component', () => {
  it('should display a default button', () => {
    render(<SmallButton />, { wrapper: PlanetProvider })
    const button = screen.getByRole('button', { name: /button/i })
    expect(button).toBeInTheDocument()
    expect(button).not.toHaveClass('active')
  })

  it('should display a button with the text passed in the parameter', () => {
    render(<SmallButton text="overview" />, { wrapper: PlanetProvider })
    const button = screen.getByRole('button', { name: /overview/i })
    expect(button).toBeInTheDocument()
  })
})
