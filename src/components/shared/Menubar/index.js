import React from 'react'
import Navbar from './_styles'
import useWindowDimensions from './hooks/useWindowDimensions'
import { ReactComponent as HamburguerIcon } from '../../../assets/icon-hamburger.svg'
import BigMenu from './_BigMenu'

const Menubar = () => {
  const { width } = useWindowDimensions()
  return (
    <Navbar>
      <h2>The planets</h2>
      <HamburguerIcon />
      {width > 768 ? <BigMenu /> : <ul>Small Menu</ul>}
    </Navbar>
  )
}

export default Menubar
