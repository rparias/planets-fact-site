import React from 'react'
import Menubutton from './Menubutton/_button'
import { COLORS } from '../../../globalStyles'

const BigMenu = () => {
  return (
    <ul>
      <li>
        <Menubutton text="Mercury" activeColor={COLORS.mercury} />
      </li>
      <li>
        <Menubutton text="Venus" activeColor={COLORS.venus} />
      </li>
      <li>
        <Menubutton text="Earth" activeColor={COLORS.earth} />
      </li>
      <li>
        <Menubutton text="Mars" activeColor={COLORS.mars} />
      </li>
      <li>
        <Menubutton text="Jupiter" activeColor={COLORS.jupiter} />
      </li>
      <li>
        <Menubutton text="Saturn" activeColor={COLORS.saturn} />
      </li>
      <li>
        <Menubutton text="Uranus" activeColor={COLORS.uranus} />
      </li>
      <li>
        <Menubutton text="Neptune" activeColor={COLORS.neptune} />
      </li>
    </ul>
  )
}

export default BigMenu
