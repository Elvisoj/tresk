import React, { useRef } from 'react'
import Navigation from './Navigation'
import Logo from '../cramps/Logo'
import HandBurger from './HandBurger'

function Navbar() {
  const navigationRef = useRef();
  return (
    <nav className='navbar'>
        <Logo />
        <Navigation navigationRef={navigationRef} />
        <HandBurger navigationRef={navigationRef} />
    </nav>
  )
}

export default Navbar
