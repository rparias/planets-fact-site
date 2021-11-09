import React from 'react'
import styled from 'styled-components'
import Button from '../../components/shared/Button'
import { COLORS } from '../../globalStyles'

export const _Buttons = () => {
  return (
    <ButtonsContainer>
      <Button number={1} text="Overview" activeColor={COLORS.mercury} />
      <Button number={2} text="Internal Structure" smallText="Structure" />
      <Button number={3} text="Surface geology" smallText="Surface" />
    </ButtonsContainer>
  )
}

const ButtonsContainer = styled.article`
  margin-top: 32px;

  @media only screen and (max-width: 767px) {
    display: flex;
    justify-content: space-between;
    margin: 0;
    width: 100%;
    position: absolute;
    top: 84px;
    left: 0;
  }
`
