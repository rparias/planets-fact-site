import React from 'react'
import PropTypes from 'prop-types'
import Button from './_styles'

const Menubutton = ({ text, activeColor }) => {
  return <Button activeColor={activeColor}>{text}</Button>
}

Menubutton.propTypes = {
  text: PropTypes.string,
  activeColor: PropTypes.string
}

export default Menubutton
