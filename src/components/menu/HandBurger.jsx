import React from 'react'
import assets from '../../assets/assets'

function HandBurger(props) {
    const handleClick = (e) =>{
        props.navigationRef.current.classList.toggle("active")
    }
  return (
    <img className='handburger-menu' src={assets.Menu} alt="handburger-menu" onClick={handleClick} />
  )
}

export default HandBurger
