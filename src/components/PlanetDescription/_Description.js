import React from 'react'
import PropTypes from 'prop-types'
import Wrapper from './styles/_Description.styles'

export const _Description = ({ name, overview: { content, source } }) => {
  return (
    <Wrapper>
      <h1>{name}</h1>
      <p>{content}</p>
      <span>Source: </span>
      <a href={source} target="_blank" rel="noreferrer">
        Wikipedia
      </a>
    </Wrapper>
  )
}

_Description.propTypes = {
  name: PropTypes.string.isRequired,
  overview: PropTypes.shape({
    content: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired
  }).isRequired
}
