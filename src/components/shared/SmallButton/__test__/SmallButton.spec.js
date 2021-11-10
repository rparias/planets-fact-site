import React from 'react'
import { render, screen } from '@testing-library/react'
import SmallButton from '../SmallButton'

describe('Button component', () => {
  it('should display a default button', () => {
    render(<SmallButton />)
    const button = screen.getByRole('button', { name: /button/i })
    expect(button).toBeInTheDocument()
    expect(button).not.toHaveClass('active')
  })

  it('should display a button with the text passed in the parameter', () => {
    render(<SmallButton text="overview" />)
    const button = screen.getByRole('button', { name: /overview/i })
    expect(button).toBeInTheDocument()
  })

  it('should display a button with the class active if it is passed as parameter', () => {
    render(<SmallButton activeColor="#D14C32" />)
    const button = screen.getByRole('button', { name: /button/i })
    expect(button).toHaveClass('active-color')
    expect(button).toHaveStyle('background-color: #D14C32')
  })
})
