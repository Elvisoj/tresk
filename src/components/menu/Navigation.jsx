import React from 'react'
import { Link } from 'react-router-dom'


function Navigation(props) {
  return (
    <ul ref={props.navigationRef} className="list-block">
        <li className="list-item"><Link to="/">Home-Section</Link></li>
        <li className="list-item"><Link to="/blog">Blog</Link></li>
        <li className="list-item"><Link to="/dashboard">Admin-Section</Link></li>
        <li className="list-item"><Link to="/about">About-Section</Link></li>
    </ul>
  )
}

export default Navigation
