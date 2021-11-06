import React from 'react'
import Navbar from './_styles'
import useWindowDimensions from './hooks/useWindowDimensions'
import { ReactComponent as HamburguerIcon } from '../../../assets/icon-hamburger.svg'
import { _BigMenu as BigMenu } from './_BigMenu'
import { _SmallMenu as SmallMenu } from './_SmallMenu'

const Menubar = () => {
  const { width } = useWindowDimensions()
  return (
    <Navbar>
      <h2>The planets</h2>
      <HamburguerIcon />
      {width > 768 ? <BigMenu /> : <SmallMenu />}
    </Navbar>
  )
}

export default Menubar
