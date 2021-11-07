import React from 'react'
import Button from '../../components/shared/Button'
import { COLORS } from '../../globalStyles'

export const _Buttons = () => {
  return (
    <>
      <Button number={1} text="Overview" activeColor={COLORS.mercury} />
      <Button number={2} text="Internal Structure" />
      <Button number={3} text="Surface geology" />
    </>
  )
}
