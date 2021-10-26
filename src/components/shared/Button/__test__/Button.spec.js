import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from '../index'

describe('Button component', () => {
  it('should display a default button', () => {
    render(<Button />)
    const button = screen.getByRole('button', { name: /button/i })
    expect(button).toBeInTheDocument()
    expect(button).not.toHaveClass('active')
  })

  it('should display a button with the text passed in the parameter', () => {
    render(<Button text="New text" />)
    const button = screen.getByRole('button', { name: /new text/i })
    expect(button).toBeInTheDocument()
  })

  it('should display a button with the class active if it is passed as parameter', () => {
    render(<Button isActive={true} />)
    const button = screen.getByRole('button', { name: /button/i })
    expect(button).toHaveClass('active')
  })

  it('should display a button with a custom color if it is passed as parameter', () => {
    render(<Button color="#D14C32" />)
    const button = screen.getByRole('button', { name: /button/i })
    expect(button).toHaveStyle('background-color: #D14C32')
  })
})
