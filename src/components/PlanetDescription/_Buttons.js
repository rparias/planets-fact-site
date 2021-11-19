import React from 'react'
import styled from 'styled-components'
import Button from '../../components/shared/Button'
import SmallButton from '../../components/shared/SmallButton'
import useWindowDimensions from '../shared/hooks/useWindowDimensions'
import { COLORS } from '../../globalStyles'

export const _Buttons = () => {
  const { width } = useWindowDimensions()

  return (
    <ButtonsContainer>
      {width >= 768 ? (
        <>
          <Button number={1} text="Overview" name="overview" activeColor={COLORS.mercury} />
          <Button number={2} text="Internal Structure" name="structure" />
          <Button number={3} text="Surface geology" name="geology" />
        </>
      ) : (
        <>
          <SmallButton text="Overview" name="overview" activeColor={COLORS.mercury} />
          <SmallButton text="Structure" name="structure" />
          <SmallButton text="Surface" name="geology" />
        </>
      )}
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
    border-bottom: 1px solid ${COLORS.lightGray};
  }
`
