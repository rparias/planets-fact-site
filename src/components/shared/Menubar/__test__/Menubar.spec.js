import React from 'react'
import { render, screen } from '@testing-library/react'
import Menubar from '../index'
import { PlanetProvider } from '../../../../context/context'

test('Menubar should have 1 logo link and 8 menu items', () => {
  render(<Menubar />, { wrapper: PlanetProvider })
  const logo = screen.getByRole('heading', { name: /the planets/i })
  const menuItems = screen.getAllByRole('listitem')
  expect(logo).toBeInTheDocument()
  expect(menuItems.length).toBe(8)
})
