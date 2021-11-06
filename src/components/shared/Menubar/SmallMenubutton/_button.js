import React from 'react'
import PropTypes from 'prop-types'
import Button from './_styles'

const SmallMenubutton = ({ text, color }) => {
  return <Button color={color}>{text}</Button>
}

SmallMenubutton.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string
}

export default SmallMenubutton
