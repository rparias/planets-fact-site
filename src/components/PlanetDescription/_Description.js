import React from 'react'
import Wrapper from './styles/_Description.styles'
import { ReactComponent as SourceIcon } from '../../assets/icon-source.svg'
import { PlanetContext } from '../../context/context'

export const _Description = () => {
  const { currentPlanet, currentFact } = React.useContext(PlanetContext)
  const { name } = currentPlanet
  const { content, source } = currentFact

  return (
    <Wrapper>
      <h1>{name}</h1>
      <p>{content}</p>
      <span>Source: </span>
      <a href={source} target="_blank" rel="noreferrer">
        Wikipedia
      </a>
      <SourceIcon />
    </Wrapper>
  )
}
