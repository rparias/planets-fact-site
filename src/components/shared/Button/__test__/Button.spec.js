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
    expect(button).not.toHaveClass('active')
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

  it('should display a button with the class active if it is passed as parameter', () => {
    render(<Button activeColor="#D14C32" />, { wrapper: PlanetProvider })
    const button = screen.getByRole('button', { name: /button/i })
    expect(button).toHaveClass('active-color')
    expect(button).toHaveStyle('background-color: #D14C32')
  })
})
