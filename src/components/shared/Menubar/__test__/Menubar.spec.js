import React from 'react'
import { render, screen } from '@testing-library/react'
import Menubar from '../index'

test('Menubar should have 1 logo link and 8 menu items', () => {
  render(<Menubar />)
  const logo = screen.getByRole('heading', { name: /the planets/i })
  const menuItems = screen.getAllByRole('listitem')
  expect(logo).toBeInTheDocument()
  expect(menuItems.length).toBe(8)
})
