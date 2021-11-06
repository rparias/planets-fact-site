import React from 'react'
import { COLORS } from '../../../globalStyles'
import SmallMenubutton from './SmallMenubutton/_button'

export const _SmallMenu = () => {
  return (
    <ul className="menu">
      <li>
        <SmallMenubutton text="Mercury" color={COLORS.mercury} />
      </li>
      <li>
        <SmallMenubutton text="Venus" color={COLORS.venus} />
      </li>
      <li>
        <SmallMenubutton text="Earth" color={COLORS.earth} />
      </li>
      <li>
        <SmallMenubutton text="Mars" color={COLORS.mars} />
      </li>
      <li>
        <SmallMenubutton text="Jupiter" color={COLORS.jupiter} />
      </li>
      <li>
        <SmallMenubutton text="Saturn" color={COLORS.saturn} />
      </li>
      <li>
        <SmallMenubutton text="Uranus" color={COLORS.uranus} />
      </li>
      <li>
        <SmallMenubutton text="Neptune" color={COLORS.neptune} />
      </li>
    </ul>
  )
}
