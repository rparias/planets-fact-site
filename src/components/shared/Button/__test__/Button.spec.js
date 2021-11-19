import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from '../index'
import { PlanetProvider } from '../../../../context/context'

describe('Button component', () => {
  it('should display a default button', () => {
    render(<Button />, { wrapper: PlanetProvider })
    const button = screen.getByRole('button', { name: /button/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('01')
  })

  it('should display a button with the text passed in the parameter', () => {
    render(<Button text="New text" />, { wrapper: PlanetProvider })
    const button = screen.getByRole('button', { name: /new text/i })
    expect(button).toBeInTheDocument()
  })

  it('should display a button with the number passed in the parameter', () => {
    render(<Button number={2} />, { wrapper: PlanetProvider })
    const button = screen.getByRole('button', { name: /button/i })
    expect(button).toHaveTextContent('02')
  })

  it('should render a button without active class', () => {
    render(<Button />, { wrapper: PlanetProvider })
    const button = screen.getByRole('button', { name: /button/i })
    expect(button).not.toHaveClass('active-color')
  })

  it('should render a button with active class if passed as prop', () => {
    render(<Button active />, { wrapper: PlanetProvider })
    const button = screen.getByRole('button', { name: /button/i })
    expect(button).toHaveClass('active-color')
  })
})
