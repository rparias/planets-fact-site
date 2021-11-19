import React from 'react'
import styled from 'styled-components'
import Button from '../../components/shared/Button'
import SmallButton from '../../components/shared/SmallButton'
import useWindowDimensions from '../shared/hooks/useWindowDimensions'
import { COLORS } from '../../globalStyles'

export const _Buttons = () => {
  const { width } = useWindowDimensions()

  const setActiveButton = (buttonName) => {
    console.log({ buttonName })
    const previousActiveButtons = document.querySelectorAll('.active-color')
    console.log({ previousActiveButtons })
    previousActiveButtons.forEach((button) => {
      button.classList.remove('active-color')
    })

    const newActiveButtons = document.querySelectorAll(`[name=${buttonName}]`)
    console.log({ newActiveButtons })
    newActiveButtons.forEach((button) => {
      button.classList.add('active-color')
    })
  }

  return (
    <ButtonsContainer>
      {width >= 768 ? (
        <>
          <Button
            number={1}
            text="Overview"
            name="overview"
            setActiveButton={setActiveButton}
            active
          />
          <Button
            number={2}
            text="Internal Structure"
            name="structure"
            setActiveButton={setActiveButton}
          />
          <Button
            number={3}
            text="Surface geology"
            name="geology"
            setActiveButton={setActiveButton}
          />
        </>
      ) : (
        <>
          <SmallButton text="Overview" name="overview" active setActiveButton={setActiveButton} />
          <SmallButton text="Structure" name="structure" setActiveButton={setActiveButton} />
          <SmallButton text="Surface" name="geology" setActiveButton={setActiveButton} />
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
