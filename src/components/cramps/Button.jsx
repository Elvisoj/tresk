import React from 'react'

function Button(props) {
  return (
    <button className="my-button btn" onClick={(e)=> props.event(e)}>props.content</button>
  )
}

export default Button
