import React from 'react'
import Navbar from './_styles'

const Menubar = () => {
  return (
    <Navbar>
      <h2>The planets</h2>
      <ul>
        <li>
          <button>Mercury</button>
        </li>
        <li>
          <button>Venus</button>
        </li>
        <li>
          <button>Earth</button>
        </li>
        <li>
          <button>Mars</button>
        </li>
        <li>
          <button>Jupiter</button>
        </li>
        <li>
          <button>Saturn</button>
        </li>
        <li>
          <button>Uranus</button>
        </li>
        <li>
          <button>Neptune</button>
        </li>
      </ul>
    </Navbar>
  )
}

export default Menubar
